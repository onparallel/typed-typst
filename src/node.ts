/** Node-only helpers: checking the installed Typst binary, and compiling a document to see what Typst says. */
import { execFileSync, spawn } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { TYPST_VERSION } from './gen/std.ts'
import { render } from './printer.ts'

/** The version of the Typst binary, as `0.15.1`. */
export function installedTypstVersion(bin = 'typst'): string {
  const out = execFileSync(bin, ['--version'], { encoding: 'utf8', timeout: 10_000, killSignal: 'SIGKILL' })
  const m = /^typst (\d+\.\d+\.\d+)(?: |\n|$)/.exec(out)
  if (!m) throw new Error(`cannot read the version from ${JSON.stringify(out.trim())}`)
  return m[1]!
}

/** Throws unless the installed Typst binary is the version the bindings were generated for. */
export function checkTypstVersion(bin = 'typst'): void {
  const installed = installedTypstVersion(bin)
  if (installed !== TYPST_VERSION) {
    throw new Error(`Typst ${installed} is installed, but these bindings are for Typst ${TYPST_VERSION}`)
  }
}

/** What Typst reported about the document. */
export interface Diagnostic {
  readonly severity: 'error' | 'warning'
  readonly message: string
  /** The file, when it is not the document itself (a package, an imported file). */
  readonly file: string | null
  /** 1-based line and column in `file`, or in the printed source. */
  readonly line: number | null
  readonly column: number | null
  /** The line of the printed source the diagnostic points at. */
  readonly sourceLine: string | null
  readonly hints: readonly string[]
}

export interface CheckOptions {
  /** The project directory: relative paths (`path('logo.png')`, imports) resolve from it. Default: an empty directory. */
  readonly root?: string
  /** Directories with fonts, in addition to the system's (unless `ignoreSystemFonts`). */
  readonly fontPaths?: readonly string[]
  readonly ignoreSystemFonts?: boolean
  /** Where packages (`@preview/…`) are cached. Default: Typst's. */
  readonly packageCachePath?: string
  /**
   * Where local packages (`@local/…`) are, which Typst also searches first for `@preview/…`.
   * Default: Typst's (the user's data directory). Set it, with `packageCachePath`, to pin packages.
   */
  readonly packagePath?: string
  /** `sys.inputs`. */
  readonly inputs?: Readonly<Record<string, string>>
  /** The Typst binary. */
  readonly bin?: string
  /** Milliseconds before Typst is killed and the promise rejects. Default: no limit. */
  readonly timeout?: number
  /** Aborting it kills Typst and rejects the promise. */
  readonly signal?: AbortSignal
}

export interface CheckResult {
  /** Whether Typst compiled the document. Warnings do not make it fail. */
  readonly ok: boolean
  /** The printed Typst source that was compiled. */
  readonly source: string
  readonly diagnostics: readonly Diagnostic[]
  /** The PDF, when the document compiled. */
  readonly pdf: Uint8Array | null
}

/**
 * Prints a document and compiles it with the Typst binary, to find out what
 * the types could not: a missing file, a wrong value only Typst knows, an
 * unknown font. The diagnostics point into the printed source (`sourceLine`).
 *
 * ```ts
 * const result = await check(doc(m.heading(1, 'Hi')))
 * if (!result.ok) console.error(result.diagnostics)
 * ```
 */
export async function check(document: Parameters<typeof render>[0], options: CheckOptions = {}): Promise<CheckResult> {
  return checkSource(render(document), options)
}

/** Like `check`, for Typst source that is already printed. */
export async function checkSource(source: string, options: CheckOptions = {}): Promise<CheckResult> {
  const { timeout } = options
  if (timeout !== undefined && !(Number.isInteger(timeout) && timeout >= 1 && timeout <= 2 ** 31 - 1))
    throw new RangeError(`timeout is a whole number of milliseconds from 1 to 2^31 - 1, not ${timeout}`)
  const out = mkdtempSync(join(tmpdir(), 'typed-typst-'))
  try {
    const pdf = join(out, 'document.pdf')
    // The source goes in on stdin, so nothing is written into the project.
    const args = [
      'compile',
      '-',
      pdf,
      // `--flag=value`: a value that starts with `-` stays a value.
      `--root=${options.root ?? out}`,
      ...(options.ignoreSystemFonts ? ['--ignore-system-fonts'] : []),
      ...(options.fontPaths ?? []).map((p) => `--font-path=${p}`),
      ...(options.packageCachePath ? [`--package-cache-path=${options.packageCachePath}`] : []),
      ...(options.packagePath ? [`--package-path=${options.packagePath}`] : []),
      ...Object.entries(options.inputs ?? {}).map(([k, v]) => {
        // Typst splits at the first `=`: a key with one would change the key and the value.
        if (k === '' || k.includes('=')) throw new TypeError(`not an input name: ${JSON.stringify(k)}`)
        if (typeof v !== 'string') throw new TypeError(`input ${k}: a value is a string, not ${typeof v}`)
        return `--input=${k}=${v}`
      }),
    ]
    const stderr = await new Promise<{ code: number; stderr: string }>((resolve, reject) => {
      if (options.signal?.aborted) return reject(new Error('the compilation was aborted'))
      // Its own process group, so that a kill also reaches what `bin` starts (a wrapper, a sandbox).
      // Its own process group (`detached`), so that a kill also reaches what `bin` starts (a wrapper,
      // a sandbox). stdout is not read; stderr is kept up to 64 MB.
      const child = spawn(options.bin ?? 'typst', args, { detached: true, stdio: ['pipe', 'ignore', 'pipe'] })
      let err = ''
      child.stderr.setEncoding('utf8')
      child.stderr.on('data', (chunk: string) => {
        if (err.length + chunk.length > 64 << 20) kill('Typst wrote more than 64 MB of diagnostics')
        else err += chunk
      })
      child.on('error', (error) => {
        stop()
        reject(error)
      })
      child.on('close', (code) => {
        stop()
        if (stopped) reject(new Error(stopped))
        else resolve({ code: code ?? 1, stderr: err })
      })
      let stopped: string | null = null
      const kill = (why: string) => {
        stopped ??= why
        try {
          process.kill(-child.pid!, 'SIGKILL')
        } catch {
          child.kill('SIGKILL')
        }
      }
      const timer = options.timeout
        ? setTimeout(() => kill(`Typst did not finish within ${options.timeout} ms`), options.timeout)
        : undefined
      const onAbort = () => kill('the compilation was aborted')
      // When this process exits, no `finally` runs: kill Typst and remove the directory here.
      const onExit = () => {
        kill('the process exited')
        rmSync(out, { recursive: true, force: true })
      }
      options.signal?.addEventListener('abort', onAbort, { once: true })
      // Typst is in a group of its own, so it would outlive this process: kill it when this one exits.
      process.once('exit', onExit)
      const stop = () => {
        clearTimeout(timer)
        options.signal?.removeEventListener('abort', onAbort)
        process.removeListener('exit', onExit)
      }
      // Typst may exit before it reads the whole source (a wrong argument): the exit code tells.
      child.stdin!.on('error', () => {})
      child.stdin!.end(source)
    })
    const ok = stderr.code === 0
    const diagnostics = parseDiagnostics(stderr.stderr, source)
    // A failure without an error message (Typst panicked, or was killed): its last words.
    if (!ok && !diagnostics.some((d) => d.severity === 'error'))
      diagnostics.push({
        severity: 'error',
        message: stderr.stderr.trim().split('\n').slice(-3).join('\n') || `Typst exited with code ${stderr.code}`,
        file: null,
        line: null,
        column: null,
        sourceLine: null,
        hints: [],
      })
    return { ok, source, diagnostics, pdf: ok ? new Uint8Array(readFileSync(pdf)) : null }
  } finally {
    rmSync(out, { recursive: true, force: true })
  }
}

/**
 * Parses Typst's diagnostics: `error: message`, a `┌─ file:line:column` location
 * (0-based column), the source excerpt, then `= hint: …` lines.
 */
export function parseDiagnostics(stderr: string, source: string): Diagnostic[] {
  const lines = source.split('\n')
  const out: ({ -readonly [K in keyof Diagnostic]: Diagnostic[K] } & { hints: string[] })[] = []
  for (const raw of stderr.split('\n')) {
    const line = raw.trimEnd()
    const start = /^(error|warning): (.*)$/.exec(line)
    if (start) {
      out.push({
        severity: start[1] as 'error' | 'warning',
        message: start[2]!,
        file: null,
        line: null,
        column: null,
        sourceLine: null,
        hints: [],
      })
      continue
    }
    const last = out.at(-1)
    if (!last) continue
    const at = /^\s*┌─ (.*):(\d+):(\d+)$/.exec(line)
    if (at && last.line === null) {
      const own = /(^|\/)<stdin>$/.test(at[1]!)
      last.file = own ? null : at[1]!
      // Lines are 1-based: a 0 is no line.
      last.line = Number(at[2]) || null
      last.column = last.line === null ? null : Number(at[3]) + 1
      last.sourceLine = own && last.line !== null ? (lines[last.line - 1] ?? null) : null
      continue
    }
    const hint = /^\s*= hint: (.*)$/.exec(line)
    // Pushed, not copied: a message may hold many hint lines (data repeated in a diagnostic).
    if (hint) last.hints.push(hint[1]!)
  }
  return out
}

export { TYPST_VERSION }
