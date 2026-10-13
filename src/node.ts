/**
 * Node-only: `typst(options)` runs the Typst binary on a document, with the commands of its CLI
 * (`compile`, `eval`, `--version`).
 */
import { execFileSync, spawn } from 'node:child_process'
import { mkdtempSync, rmSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import type { Expr } from './core.ts'
import { toCode } from './convert.ts'
import { TYPST_VERSION } from './gen/std.ts'
import { printCode, render } from './printer.ts'

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

/** Options of `typst()`; each command also takes them, and they replace the ones `typst()` got. */
export interface TypstOptions {
  /** The project directory: relative paths (`path('logo.png')`, imports) resolve from it. Default: an empty directory. */
  readonly root?: string | undefined
  /** Directories with fonts, in addition to the system's (unless `ignoreSystemFonts`). */
  readonly fontPaths?: readonly string[] | undefined
  readonly ignoreSystemFonts?: boolean | undefined
  /** Where packages (`@preview/…`) are cached. Default: Typst's. */
  readonly packageCachePath?: string | undefined
  /**
   * Where local packages (`@local/…`) are, which Typst also searches first for `@preview/…`.
   * Default: Typst's (the user's data directory). Set it, with `packageCachePath`, to pin packages.
   */
  readonly packagePath?: string | undefined
  /** `sys.inputs`. */
  readonly inputs?: Readonly<Record<string, string>> | undefined
  /** The Typst binary. Default: `typst`. */
  readonly bin?: string | undefined
  /** Milliseconds before Typst is killed and the promise rejects with a `TimeoutError`. Default: no limit. */
  readonly timeout?: number | undefined
  /** Aborting it kills Typst and rejects the promise with the signal's reason (an `AbortError` by default). */
  readonly signal?: AbortSignal | undefined
}

/** A document of the library, or Typst source that is already printed (`{ source }`). */
export type TypstInput = Parameters<typeof render>[0] | { readonly source: string }

interface Result {
  /** Whether Typst compiled the document. Warnings do not make it fail. */
  readonly ok: boolean
  /** The printed Typst source that was compiled. */
  readonly source: string
  readonly diagnostics: readonly Diagnostic[]
}

export interface CompileResult extends Result {
  /** The PDF, when the document compiled. */
  readonly pdf: Uint8Array | null
}

export interface EvalResult extends Result {
  /** The value of the expression, as JSON, when the document compiled. */
  readonly value: unknown
}

/** The commands of `typst()`. */
export interface Typst {
  /**
   * Compiles the document to PDF, to get it or to find out what the types could not: a missing file, a
   * wrong value only Typst knows, an unknown font. The diagnostics point into the printed source
   * (`sourceLine`).
   */
  compile(input: TypstInput, options?: TypstOptions): Promise<CompileResult>
  /**
   * Evaluates an expression in the context of the document (`typst eval … --in`), such as a query of
   * the `metadata` it places: `` t.eval(doc, unsafeRaw.code`query(metadata)`) ``. The value comes back
   * as JSON.
   */
  eval(input: TypstInput, expression: Expr<string>, options?: TypstOptions): Promise<EvalResult>
  /** The version of the Typst binary, as `0.15.1`. */
  version(): string
  /** Throws unless the Typst binary is the version the bindings were generated for. */
  checkVersion(): void
}

/**
 * Runs the Typst binary with these options. Give a query and the compilation that follows it the same
 * `root`, to compile with the files the query asked for.
 *
 * ```ts
 * const t = typst({ root, fontPaths: ['fonts'], timeout: 60_000 })
 * const { value } = await t.eval(doc, unsafeRaw.code`query(metadata)`, { inputs: { draft: 'true' } })
 * const { ok, pdf, diagnostics } = await t.compile(doc)
 * ```
 */
export function typst(options: TypstOptions = {}): Typst {
  const version = () => {
    const out = execFileSync(options.bin ?? 'typst', ['--version'], {
      encoding: 'utf8',
      timeout: 10_000,
      killSignal: 'SIGKILL',
    })
    const m = /^typst (\d+\.\d+\.\d+)(?: |\n|$)/.exec(out)
    if (!m) throw new Error(`cannot read the version from ${JSON.stringify(out.trim())}`)
    return m[1]!
  }
  return {
    async compile(input, more) {
      return run(sourceOf(input), { ...options, ...more }, async (out) => {
        const pdf = join(out, 'document.pdf')
        return {
          args: ['compile', '-', pdf],
          result: async (ok) => ({ pdf: ok ? new Uint8Array(await readFile(pdf)) : null }),
        }
      })
    },
    async eval(input, expression, more) {
      // The expression prints as code, like any value: a string from data stays a string.
      const code = printCode(toCode(expression), 0)
      return run(sourceOf(input), { ...options, ...more }, async () => ({
        args: ['eval', '--in=-', code],
        result: async (ok, stdout) => ({ value: ok ? (JSON.parse(stdout) as unknown) : null }),
      }))
    },
    version,
    checkVersion() {
      const installed = version()
      if (installed !== TYPST_VERSION)
        throw new Error(`Typst ${installed} is installed, but these bindings are for Typst ${TYPST_VERSION}`)
    },
  }
}

/** `{ source }` (an object with only that key) is printed source; anything else is a document. */
function sourceOf(input: TypstInput): string {
  if (typeof input === 'object' && input !== null && Object.getPrototypeOf(input) === Object.prototype) {
    const keys = Object.keys(input)
    if (keys.length === 1 && keys[0] === 'source') {
      const { source } = input as { source: unknown }
      if (typeof source !== 'string') throw new TypeError(`source is a string, not ${typeof source}`)
      return source
    }
  }
  return render(input)
}

/**
 * What to do when this process exits, for each compilation still running: one listener on `exit` for
 * all of them (one each would warn past ten at once, `MaxListenersExceededWarning`).
 */
const onProcessExit = new Set<() => void>()
let listening = false
/** Registered on the first compilation: importing the module has no side effect. */
function listenForExit(): void {
  if (listening) return
  listening = true
  process.on('exit', () => {
    for (const f of onProcessExit) f()
  })
}

/** Runs Typst on `source` (on stdin) in a temporary directory, with the arguments `command` gives. */
async function run<R>(
  source: string,
  options: TypstOptions,
  command: (out: string) => Promise<{ args: string[]; result: (ok: boolean, stdout: string) => Promise<R> }>,
): Promise<R & { ok: boolean; source: string; diagnostics: Diagnostic[] }> {
  const { timeout } = options
  if (timeout !== undefined && !(Number.isInteger(timeout) && timeout >= 1 && timeout <= 2 ** 31 - 1))
    throw new RangeError(`timeout is a whole number of milliseconds from 1 to 2^31 - 1, not ${timeout}`)
  const out = mkdtempSync(join(tmpdir(), 'typed-typst-'))
  try {
    const { args: commandArgs, result } = await command(out)
    // The source goes in on stdin, so nothing is written into the project.
    const args = [
      ...commandArgs,
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
    const done = await new Promise<{ code: number; stdout: string; stderr: string }>((resolve, reject) => {
      // Rejected as `fetch` does: an abort with the signal's reason (an `AbortError` by default), a timeout
      // with a `TimeoutError`, so a caller can retry one and not the other.
      if (options.signal?.aborted) return reject(options.signal.reason)
      // Its own process group (`detached`), so that a kill also reaches what `bin` starts (a wrapper,
      // a sandbox). stdout and stderr are kept up to 64 MB each.
      const child = spawn(options.bin ?? 'typst', args, { detached: true, stdio: ['pipe', 'pipe', 'pipe'] })
      let stdout = ''
      let err = ''
      child.stdout.setEncoding('utf8')
      child.stdout.on('data', (chunk: string) => {
        if (stdout.length + chunk.length > 64 << 20) kill(new Error('Typst wrote more than 64 MB of output'))
        else stdout += chunk
      })
      child.stderr.setEncoding('utf8')
      child.stderr.on('data', (chunk: string) => {
        if (err.length + chunk.length > 64 << 20) kill(new Error('Typst wrote more than 64 MB of diagnostics'))
        else err += chunk
      })
      child.on('error', (error) => {
        stop()
        reject(error)
      })
      child.on('close', (code) => {
        stop()
        if (stopped) reject(stopped.error)
        else resolve({ code: code ?? 1, stdout, stderr: err })
      })
      // Boxed: a signal's reason may be any value, `undefined` too.
      let stopped: { error: unknown } | null = null
      const kill = (why: unknown) => {
        stopped ??= { error: why }
        try {
          process.kill(-child.pid!, 'SIGKILL')
        } catch {
          child.kill('SIGKILL')
        }
      }
      const timer = options.timeout
        ? setTimeout(
            () => kill(new DOMException(`Typst did not finish within ${options.timeout} ms`, 'TimeoutError')),
            options.timeout,
          )
        : undefined
      const onAbort = () => kill(options.signal!.reason)
      // When this process exits, no `finally` runs: kill Typst and remove the directory here.
      const onExit = () => {
        kill(new Error('the process exited'))
        rmSync(out, { recursive: true, force: true })
      }
      options.signal?.addEventListener('abort', onAbort, { once: true })
      // Typst is in a group of its own, so it would outlive this process: kill it when this one exits.
      listenForExit()
      onProcessExit.add(onExit)
      const stop = () => {
        clearTimeout(timer)
        options.signal?.removeEventListener('abort', onAbort)
        onProcessExit.delete(onExit)
      }
      // Typst may exit before it reads the whole source (a wrong argument): the exit code tells.
      child.stdin!.on('error', () => {})
      child.stdin!.end(source)
    })
    const ok = done.code === 0
    const diagnostics = parseDiagnostics(done.stderr, source)
    // A failure without an error message (Typst panicked, or was killed): its last words.
    if (!ok && !diagnostics.some((d) => d.severity === 'error'))
      diagnostics.push({
        severity: 'error',
        message: done.stderr.trim().split('\n').slice(-3).join('\n') || `Typst exited with code ${done.code}`,
        file: null,
        line: null,
        column: null,
        sourceLine: null,
        hints: [],
      })
    return { ok, source, diagnostics, ...(await result(ok, done.stdout)) }
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
