/**
 * Converts the corpus of Typst suite cases into TypeScript that builds the same
 * document with the library.
 *
 * Usage:
 *   ls test/suite/corpus/*.typ | tools/reflect/syntax.sh > corpus.jsonl
 *   node scripts/convert-suite.ts corpus.jsonl
 *
 * Writes test/suite/converted/<case>.ts and test/suite/converted/report.json.
 *
 * The converter maps each syntax node to the API. What the API does not cover
 * (loops, conditions, comparisons, methods on arbitrary values…) becomes an
 * `unsafeRaw` snippet of the original source, at the smallest expression or
 * statement that contains it. The report counts both, so the share of the
 * suite that the API covers on its own is measured, not assumed. A case that
 * cannot be expressed even with snippets is reported as unsupported.
 */
import { execFileSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { format } from 'prettier'
import { kebab } from '../src/escape.ts'

type Node = [kind: string, text: string] | [kind: string, children: Node[]]

const [input, setFlag] = process.argv.slice(2)
if (!input) throw new Error('usage: convert-suite.ts <corpus.jsonl> [--universe]')
/** `test/suite` (Typst's test suite) or `test/universe` (Typst Universe templates). */
const set = setFlag === '--universe' ? 'universe' : 'suite'

// ---------------------------------------------------------------------------
// What the library exports, from the spec.

interface SpecParam {
  name: string
  positional: boolean
  settable: boolean
  variadic: boolean
}
interface SpecFunc {
  path: string
  contextual: boolean | null
  element: boolean
  params: SpecParam[]
  returns: { kind: string; type?: string } | null
}
const VERSION = readFileSync(new URL('../typst-version', import.meta.url), 'utf8').trim()
const spec = JSON.parse(readFileSync(new URL(`../spec/typst-${VERSION}.json`, import.meta.url), 'utf8')) as {
  functions: SpecFunc[]
  types: { path: string }[]
}
const { exclude } = await import('../spec/overlay.ts')
const excluded = (path: string) => exclude.some((e: string) => path === e || path.startsWith(e + '.'))
const funcs = new Map(
  spec.functions.filter((f) => !excluded(f.path)).map((f) => [f.path.replace(/\.constructor$/, ''), f]),
)
const TOP = new Set([...spec.functions, ...spec.types].map((d) => d.path.split('.')[0]!).filter((p) => !excluded(p)))
const VALUES = new Set([
  'left',
  'center',
  'right',
  'start',
  'end',
  'top',
  'horizon',
  'bottom',
  'ltr',
  'rtl',
  'ttb',
  'btt',
  'black',
  'gray',
  'silver',
  'white',
  'navy',
  'blue',
  'aqua',
  'teal',
  'eastern',
  'purple',
  'fuchsia',
  'maroon',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'lime',
])
const MANUAL = new Set(['rgb', 'luma', 'label', 'path', 'read', 'sym', 'emoji'])
// Every function of the spec, written by hand or not, for its parameter types.
const ALL = new Map(spec.functions.map((f) => [f.path.replace(/\.constructor$/, ''), f]))
// Every path the bindings export: functions, types and symbols (a symbol takes any modifiers).
const TYPES = new Set(spec.types.map((t) => t.path))
// Symbol paths as the bindings generate them: each non-deprecated variant, and its prefixes.
const SYMBOL_PATHS = new Set<string>()
for (const sym of (
  spec as unknown as { symbols: { path: string; variants: { variant: string; deprecation: string | null }[] }[] }
).symbols) {
  if (!sym.path.startsWith('sym.') && !sym.path.startsWith('emoji.')) continue
  SYMBOL_PATHS.add(sym.path)
  for (const v of sym.variants) {
    if (v.deprecation || !v.variant) continue
    const mods = v.variant.split('.')
    mods.forEach((_, i) => SYMBOL_PATHS.add(`${sym.path}.${mods.slice(0, i + 1).join('.')}`))
  }
}
/** Values the overlay adds (`calc.pi`, `color.map.rainbow`), with their types. */
const { values: overlayValues } = await import('../spec/overlay.ts')
const VALUE_PATHS = new Map<string, string>(
  Object.entries(overlayValues).flatMap(([module, v]) =>
    v.names.map((n): [string, string] => [`${module}.${n}`, v.type]),
  ),
)
const exists = (path: string): boolean =>
  funcs.has(path) || TYPES.has(path) || SYMBOL_PATHS.has(path) || VALUE_PATHS.has(path)
const isModule = (path: string) =>
  (spec.functions.some((f) => f.path.startsWith(path + '.')) ||
    [...VALUE_PATHS.keys()].some((p) => p.startsWith(path + '.'))) &&
  !funcs.has(path) &&
  !TYPES.has(path)
const COLORS = new Set([...VALUES].slice(12))
const RESERVED = new Set([
  'enum',
  'super',
  'in',
  'new',
  'delete',
  'default',
  'function',
  'class',
  'arguments',
  'eval',
  'import',
  'export',
  'return',
  'this',
  'void',
  'with',
  'yield',
])
/**
 * Names a binding cannot take: JS reserved words, what the library exports (a case may import it
 * after the binding is named) and the parameter object of `define` bodies.
 */
const UNAVAILABLE = new Set([
  ...'break case catch class const continue debugger default delete do else enum export extends false finally for function if import in instanceof new null return super switch this throw true try typeof var void while with yield let static implements interface package private protected public await arguments eval undefined NaN Infinity p'.split(
    ' ',
  ),
  ...Object.keys(await import('../src/index.ts')),
])
const camel = (s: string) => s.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase())
const jsTop = (name: string) => (RESERVED.has(camel(name)) ? camel(name) + '_' : camel(name))
// Names that `let_` and `define` reject: Typst's globals, and words that are no Typst identifiers.
const STD = new Set([...TOP, ...VALUES, ...MANUAL, 'std', 'sys', 'math', 'calc'])

// ---------------------------------------------------------------------------
// Syntax helpers.

const kind = (n: Node) => n[0]
const kids = (n: Node): Node[] => (Array.isArray(n[1]) ? n[1] : [])
const src = (n: Node): string => (Array.isArray(n[1]) ? n[1].map(src).join('') : n[1])
const sig = (n: Node) => kids(n).filter((k) => !['Space', 'LineComment', 'BlockComment'].includes(kind(k)))

class Unsupported extends Error {}
const fail = (why: string): never => {
  throw new Unsupported(why)
}

// ---------------------------------------------------------------------------
// Conversion state of one case.

interface Scope {
  /** Typst name → JS expression for it. */
  vars: Map<string, string>
  /** JS variable of the context token, when contextual calls are allowed. */
  ctx: string | null
  /** Whether a snippet may name variables of this scope (false in closures, whose parameters get renamed). */
  rawOk: boolean
  /** Inside a closure, a context or a function body. */
  nested?: boolean
  /** How many closures enclose this scope (the printer suffixes the parameters of nested ones). */
  closures?: number
}

class Case {
  imports = new Set<string>(['doc'])
  decls: string[] = []
  escapes = 0
  /** Why each snippet was needed. */
  fallbacks: string[] = []
  apiNodes = 0
  private taken = new Set<string>()
  /** A JS name for a binding: the Typst name in camelCase, with a number only when it is taken. */
  fresh(base: string): string {
    const name = camel(base).replace(/[^\w$]/g, '_')
    let v = name
    for (let i = 2; this.taken.has(v) || UNAVAILABLE.has(v); i++) v = `${name}_${i}`
    this.taken.add(v)
    return v
  }
  use(name: string): string {
    this.imports.add(name)
    return name
  }
  /** Names that imports bring into scope, by Typst name; declared when the case is done. */
  imported = new Map<string, Imported>()
  /** Import statements, whose item lists are known when the case is done (a `*` import lists what is used). */
  importStmts: { token: string; names: (string | { name: string; original: string })[] }[] = []
  /** The template's project directory (Typst Universe), where the files that the document imports are. */
  project: string | null = null
  /** The names the case assigns to (`reassigned()`). */
  reassigned: Set<string> | null = null
  /** The whole syntax tree of the case. */
  tree: Node = ['Markup', []]
  /** Imported modules (`import "x" as m`): Typst name → JS variable. */
  modules = new Map<string, string>()
  moduleDecls: string[] = []
  /** A member of an imported module, declared once. */
  importedMember(module: string, member: string): Imported {
    const entry = this.importedName(`${module}.${member}`)
    entry.member = member
    entry.module = this.modules.get(module)!
    return entry
  }
  importedName(name: string): Imported {
    let entry = this.imported.get(name)
    if (!entry) {
      entry = { v: this.fresh(name), called: false, named: new Map(), posCounts: new Set(), pos: [] }
      this.imported.set(name, entry)
    }
    return entry
  }
  private externals = new Map<string, string>()
  /** A name the document uses but does not bind (`external('forest')`), declared once. */
  external(name: string): string {
    let v = this.externals.get(name)
    if (!v) {
      v = this.fresh(name)
      this.decls.push(`const ${v} = ${this.use('external')}(${str(name)})`)
      this.externals.set(name, v)
    }
    return v
  }
}

let c: Case

/** A name from an import: how the document uses it decides how it is declared. */
interface Imported {
  v: string
  called: boolean
  /** Named arguments at the call sites: `content` if every one is a content block. */
  named: Map<string, 'content' | 'any'>
  /** The numbers of positional arguments at the call sites. */
  posCounts: Set<number>
  pos: ('content' | 'any')[]
  /** The most positional arguments a `.with(…)` gives. */
  withPos?: number
  /** A member of an imported module (`apa.title-page`): its name, and the JS variable of the module. */
  member?: string
  module?: string
}

/** Declares the names that imports bring: functions with the parameters their calls use, other values as `external`. */
function importedDecls(): string[] {
  return [...c.imported].map(([key, e]) => {
    const name = e.member ?? key
    if (!e.called) return `const ${e.v} = ${c.use('external')}(${str(name)}${e.module ? `, ${e.module}` : ''})`
    const t = (k: 'content' | 'any') => `${c.use('T')}.${k}`
    let b = `${c.use('define')}(${str(name)})`
    // The same number of positional arguments everywhere: positional parameters; else `..args`.
    // `.with(…)` may give the first positional ones: no more than the calls take.
    const fixed = e.posCounts.size === 1 && (e.withPos ?? 0) <= e.pos.length
    if (fixed) e.pos.forEach((k, i) => (b += `.pos(${str(`arg${i + 1}`)}, ${t(k)})`))
    else if (e.posCounts.size > 0 || e.withPos) b += `.rest('args', ${c.use('T')}.any)`
    for (const [key, k] of [...e.named].sort()) b += `.named(${str(key)}, ${t(k)}, ${k === 'content' ? '[]' : 'null'})`
    // What a function from elsewhere returns only Typst knows (`zh(5)` is a length).
    return `const ${e.v} = ${b}.returns(${c.use('T')}.any).external(${e.module ?? ''})`
  })
}

/** Records the arguments of a call of an imported function. */
function recordCall(e: Imported, argsNode: Node, withOnly: boolean): void {
  e.called = true
  const items = sig(argsNode).filter((a) => !['LeftParen', 'RightParen', 'Comma'].includes(kind(a)))
  const pos = items.filter((a) => kind(a) !== 'Named')
  if (withOnly) e.withPos = Math.max(e.withPos ?? 0, pos.length)
  for (const a of items)
    if (kind(a) === 'Named') {
      const [key, , v] = sig(a)
      const k = kind(v!) === 'ContentBlock' ? 'content' : 'any'
      // By its Typst name: calls name it in camelCase.
      const prev = e.named.get(src(key!))
      e.named.set(src(key!), prev && prev !== k ? 'any' : k)
    }
  if (withOnly) return
  e.posCounts.add(pos.length)
  pos.forEach((a, i) => {
    const k = kind(a) === 'ContentBlock' ? 'content' : 'any'
    e.pos[i] = e.pos[i] && e.pos[i] !== k ? 'any' : k
  })
}

const str = (s: string) => JSON.stringify(s)

/** A snippet of the original source. Template literals cannot carry every text. */
/**
 * Typst text as the body of an `unsafeRaw` template: `` ` `` and `${` are written `` \` `` and `\${`.
 * A Typst `` \` ``, a trailing backslash or `\` before a digit cannot be written in a template.
 */
function template(text: string): string {
  // `unsafeRaw` reads \\, \` and \${ as escapes: double the backslashes first, then escape the rest.
  return text.replace(/\\/g, '\\\\').replace(/`|\$\{/g, (m) => '\\' + m)
}

function raw(kindOf: 'code' | 'markup', text: string, scope: Scope, type = 'any'): string {
  if (!scope.rawOk) fail('snippet inside a closure')
  const body = template(text)
  c.escapes++
  c.use('unsafeRaw')
  return kindOf === 'code' ? `unsafeRaw.code<${type}>\`${body}\`` : `unsafeRaw.markup\`${body}\``
}

const ASCII_LABEL = /^[A-Za-z0-9_-][A-Za-z0-9_\-.:]*$/

/**
 * `target` with the label `name` attached. The library attaches only ASCII labels in markup (Unicode's
 * identifier characters change between versions); another one goes in a snippet, `[#body<名>]`.
 */
function attach(target: string, name: string, scope: Scope): string {
  if (ASCII_LABEL.test(name)) return `${c.use('labelled')}(${target}, ${c.use('label')}(${str(name)}))`
  if (!scope.rawOk) fail('snippet inside a closure')
  c.escapes++
  c.use('unsafeRaw')
  return `unsafeRaw.code({ body: ${target} })<'content'>\`[#body<${template(name)}>]\``
}

// ---------------------------------------------------------------------------
// Code.

const UNITS: Record<string, string> = {
  pt: 'pt',
  mm: 'mm',
  cm: 'cm',
  in: 'inches',
  em: 'em',
  '%': 'pct',
  fr: 'fr',
  deg: 'deg',
  rad: 'rad',
}

function numeric(text: string, negative = false): string {
  const m = /^(\d*\.?\d+(?:e-?\d+)?)(pt|mm|cm|in|em|%|fr|deg|rad)$/.exec(text)
  if (!m) fail(`numeric ${text}`)
  return `${c.use(UNITS[m![2]!]!)}(${negative ? '-' : ''}${Number(m![1])})`
}

/**
 * A float literal. A JS number with no fraction prints as an int, so `12.0` is `float(12)`
 * (and `-0.0`, which no int can be, `float('-0.0')`).
 */
function floatLiteral(text: string, negative = false): string {
  const v = (negative ? -1 : 1) * Number(text.replace(/^0+(?=\d)/, ''))
  if (!Number.isInteger(v)) return String(v)
  return Object.is(v, -0) ? `${c.use('float')}('-0.0')` : `${c.use('float')}(${v})`
}

function typstString(text: string): string {
  // Typst string escapes: \\ \" \n \r \t \u{…}
  const body = text.slice(1, -1).replace(/\\(u\{([0-9a-fA-F]+)\}|.)/g, (_, e: string, hex?: string) =>
    hex
      ? String.fromCodePoint(parseInt(hex, 16))
      : // Other backslashes are kept, as Typst keeps them (`"\d"` is backslash, d).
        (({ n: '\n', r: '\r', t: '\t', '\\': '\\', '"': '"' } as Record<string, string>)[e] ?? '\\' + e),
  )
  return str(body)
}

/** The JS for a Typst path (`table.cell`, `calc.abs`), or null when it is not an export. */
function stdPath(n: Node, scope: Scope): string | null {
  if (kind(n) === 'Ident') {
    const name = src(n)
    // A name the document binds (also by an import) hides the library's from there on.
    if (scope.vars.has(name) || c.imported.has(name) || c.modules.has(name)) return null
    if (VALUES.has(name) || MANUAL.has(name)) return c.use(name)
    if (TOP.has(name)) return c.use(jsTop(name))
    return null
  }
  if (kind(n) === 'FieldAccess') {
    const path = pathOf(n)
    const root = path.split('.')[0]!
    if (scope.vars.has(root) || c.imported.has(root) || c.modules.has(root)) return null
    // `math.alpha` is `sym.alpha`: the bindings only generate the symbols of `sym`.
    if (path.startsWith('math.') && exists('sym.' + path.slice(5)) && !funcs.has(path)) {
      return `${c.use('sym')}.${path.slice(5).split('.').map(camel).join('.')}`
    }
    if (!exists(path) && !isModule(path)) return null
    const [target, , field] = sig(n)
    const base = stdPath(target!, scope)
    if (base === null) return null
    return `${base}.${camel(src(field!))}`
  }
  return null
}

/** The helpers that Typst's test runner defines for every case (the prelude of scripts/check-converted.ts). */
const RUNNER_HELPERS = new Set(['test', 'test-repr', 'print', 'lines'])

/** A name brought by an import, or defined outside the document (the runner's helpers): declared as external. */
function fromImport(name: string, scope: Scope): Imported | null {
  if (scope.vars.has(name)) return null
  if (set === 'suite' && RUNNER_HELPERS.has(name)) return c.importedName(name)
  return c.imported.get(name) ?? null
}

/** `m.f` for a module `m` that an import brings. */
function moduleMember(n: Node, scope: Scope): Imported | null {
  const [target, , field] = sig(n)
  if (kind(target!) !== 'Ident' || scope.vars.has(src(target!))) return null
  // A name an import brings may be a module or a dictionary (`palette.coral`): `external('coral', palette)`
  // prints `palette.coral` for either.
  const imported = c.modules.has(src(target!)) ? null : fromImport(src(target!), scope)
  if (imported && /^[\p{XID_Start}_][\p{XID_Continue}-]*$/u.test(src(field!))) c.modules.set(src(target!), imported.v)
  if (!c.modules.has(src(target!))) return null
  return c.importedMember(src(target!), src(field!))
}

/** The names the case assigns to with `=` (also in a destructuring), once per case. */
function reassigned(): Set<string> {
  if (c.reassigned) return c.reassigned
  const names = new Set<string>()
  const walk = (n: Node): void => {
    if (kind(n) === 'Binary' && src(sig(n)[1]!) === '=') for (const name of identsIn(sig(n)[0]!)) names.add(name)
    if (Array.isArray(n[1])) n[1].forEach(walk)
  }
  walk(c.tree)
  return (c.reassigned = names)
}

/** Whether a syntax tree has a node of a kind. */
function hasKind(n: Node, k: string): boolean {
  return kind(n) === k || (Array.isArray(n[1]) && n[1].some((x) => hasKind(x, k)))
}

/** Every name in a syntax tree. */
function identsIn(n: Node): string[] {
  if (kind(n) === 'Ident' || kind(n) === 'MathIdent') return [src(n)]
  return Array.isArray(n[1]) ? n[1].flatMap(identsIn) : []
}

/**
 * The names a package or a file exports, from Typst itself (packages are cached in
 * .cache/typst-packages). A file is evaluated in the case's project, `project`.
 */
function moduleExports(source: string, project = c.project): string[] {
  const dir = mkdtempSync(join(project ?? tmpdir(), '__exports-'))
  // The document is at the root of the project: from the temporary directory, its files are one level up.
  const spec = source.startsWith('@') || source.startsWith('/') ? source : `../${source}`
  try {
    writeFileSync(`${dir}/main.typ`, `#import ${str(spec)} as m\n#metadata(dictionary(m).keys())<exports>\n`)
    const cache = new URL('../.cache/typst-packages', import.meta.url).pathname
    const out = execFileSync(
      'typst',
      [
        'eval',
        'query(<exports>).first().value',
        '--in',
        `${dir}/main.typ`,
        '--package-cache-path',
        cache,
        ...(project ? ['--root', project] : []),
      ],
      // Packages may warn while they load.
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    )
    return JSON.parse(out) as string[]
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

function pathOf(n: Node): string {
  return kind(n) === 'FieldAccess' ? `${pathOf(sig(n)[0]!)}.${src(sig(n)[2]!)}` : src(n)
}

/** `include "x.typ"` (also `include("x.typ")`), as a statement or a value: the content of the file. */
function includeCode(n: Node): string {
  let target = sig(n)[1]!
  while (kind(target) === 'Parenthesized') target = sig(target)[1]!
  if (kind(target) !== 'Str') fail('include of a value')
  return `${c.use('includeFile')}(${str(JSON.parse(typstString(src(target))) as string)})`
}

function code(n: Node, scope: Scope): string {
  c.apiNodes++
  switch (kind(n)) {
    case 'ModuleInclude':
      return includeCode(n)
    case 'Int': {
      // `0x1f`, `010`: as a JS number literal; beyond JS's safe integers, a bigint.
      const v = Number(src(n).replace(/^0+(?=\d)/, ''))
      return Number.isSafeInteger(v) ? String(v) : `${BigInt(src(n).replace(/^0+(?=\d)/, ''))}n`
    }
    case 'Float':
      return floatLiteral(src(n))
    case 'Numeric':
      return numeric(src(n))
    case 'Str':
      return typstString(src(n))
    case 'Bool':
      return src(n)
    case 'None':
      return 'null'
    case 'Auto':
      return c.use('auto')
    case 'Ident': {
      const name = src(n)
      const v = scope.vars.get(name)
      // A name bound by a snippet can only be used by a snippet.
      if (v === RAW_VAR) return fail(`name ${name} bound by a snippet`)
      if (v) return v
      const p = stdPath(n, scope)
      if (p) return p
      // Colors that the test runner defines: values from outside the document.
      if (name === 'conifer' || name === 'forest') return c.external(name)
      const imp = fromImport(name, scope)
      if (imp) return imp.v
      return fail(`unknown name ${name}`)
    }
    case 'Parenthesized':
      return code(sig(n)[1]!, scope)
    case 'Unary': {
      const [op, arg] = sig(n)
      if (src(op!) === '-' && kind(arg!) === 'Numeric') return numeric(src(arg!), true)
      if (src(op!) === '-' && kind(arg!) === 'Float') return floatLiteral(src(arg!), true)
      if (src(op!) === '-' && kind(arg!) === 'Int') return '-' + code(arg!, scope)
      if (src(op!) === '-') return `${c.use('neg')}(${operand(arg!, scope)})`
      return fail('unary')
    }
    case 'Binary': {
      const [l, op, r] = sig(n)
      const o = src(op!)
      if (o === '+') return `${c.use('add')}(${operand(l!, scope)}, ${operand(r!, scope)})`
      if (o === '-') return `${c.use('minus')}(${operand(l!, scope)}, ${operand(r!, scope)})`
      // `2 * 1em`, `(1fr,) * 3`, `[a] * 5`, `n * 2`: the types of `times` check the operands.
      if (o === '*') return `${c.use('times')}(${operand(l!, scope)}, ${operand(r!, scope)})`
      if (o === '/') return `${c.use('div')}(${operand(l!, scope)}, ${operand(r!, scope)})`
      return fail(`operator ${o}`)
    }
    case 'Array':
      return `[${sig(n)
        .filter((k) => !['LeftParen', 'RightParen', 'Comma'].includes(kind(k)))
        .map((k) => (kind(k) === 'Spread' ? fail('spread') : code(k, scope)))
        .join(', ')}]`
    case 'Dict': {
      const entries = sig(n).filter((k) => kind(k) === 'Named' || kind(k) === 'Keyed' || kind(k) === 'Spread')
      if (!entries.length) return `${c.use('data')}({})`
      const pairs = entries.map((e): [string, string] => {
        const [key, , value] = sig(e)
        if (kind(e) === 'Keyed') {
          if (kind(key!) !== 'Str') fail('dictionary key')
          return [JSON.parse(typstString(src(key!))) as string, code(value!, scope)]
        }
        if (kind(e) !== 'Named') fail('dictionary key')
        return [src(key!), code(value!, scope)]
      })
      // A plain object's camelCase keys print in kebab-case: keys that would change need `dict`, which keeps them.
      const plain = pairs.every(([k]) => /^[\p{XID_Start}_][\p{XID_Continue}-]*$/u.test(k) && kebab(camel(k)) === k)
      const body = `{ ${pairs.map(([k, v]) => `${str(plain ? camel(k) : k)}: ${v}`).join(', ')} }`
      if (plain) DICT_FORMS.set(body, `{ ${pairs.map(([k, v]) => `${str(k)}: ${v}`).join(', ')} }`)
      return plain ? body : `${c.use('dict')}(${body})`
    }
    case 'ContentBlock':
      return content(sig(n)[1]!, scope)
    case 'FuncCall':
      return call(n, scope)
    case 'FieldAccess': {
      const p = stdPath(n, scope)
      if (p) return p
      const [target, , field] = sig(n)
      // Fields of the element in a show rule.
      if (kind(target!) === 'Ident' && scope.vars.get(src(target!))?.startsWith('it')) {
        const v = scope.vars.get(src(target!))!
        const known = ELEMENT_FIELDS.get(v)
        if (known && !known.includes(camel(src(field!)))) fail('field unknown to the bindings')
        return `${v}.${camel(src(field!))}`
      }
      const member = moduleMember(n, scope)
      if (member) return member.v
      return fail(
        `field access on ${kind(target!) === 'Ident' ? (scope.vars.has(src(target!)) ? 'a binding of unknown type' : 'an unknown name') : `a ${kind(target!)}`}`,
      )
    }
    case 'Contextual': {
      const ctx = c.fresh('ctx')
      const inner = { ...scope, ctx, nested: true }
      return `${c.use('context')}((${ctx}) => ${code(sig(n)[1]!, inner)})`
    }
    case 'Closure':
      return closure(n, scope)
    case 'CodeBlock': {
      const items = sig(sig(n)[1]!).filter((k) => kind(k) !== 'Semicolon')
      const rules = items.slice(0, -1)
      const last = items.at(-1)
      if (last && rules.every((r) => kind(r) === 'SetRule' || kind(r) === 'ShowRule'))
        return `${c.use('codeBlock')}([${rules.map((r) => stmt(r, scope)).join(', ')}], ${code(last, scope)})`
      // Statements and expressions in order; the block's value joins the expressions'. Its bindings are its own.
      const inner: Scope = { ...scope, vars: new Map(scope.vars) }
      const parts = items.map((item) => (STMTS.has(kind(item)) ? stmt(item, inner) : codeOrRaw(item, inner)))
      return `${c.use('codeBlock')}([${parts.join(', ')}])`
    }
    case 'Raw':
      return rawElement(n)
    case 'Label':
      return `${c.use('label')}(${str(src(n).slice(1, -1))})`
    case 'Equation':
      return equation(n, scope)
    default:
      return fail(kind(n))
  }
}

/** Code where a snippet may stand in for what the API cannot express. */
function codeOrRaw(n: Node, scope: Scope, type = 'any'): string {
  const mark = c.escapes
  try {
    return code(n, scope)
  } catch (e) {
    if (!(e instanceof Unsupported)) throw e
    c.escapes = mark
    c.fallbacks.push(e.message)
    return raw('code', src(n), scope, type)
  }
}

function rawElement(n: Node, fields = false): string {
  const parts = sig(n)
  const delim = src(parts[0]!)
  const lang = delim.length >= 3 ? parts.find((p) => kind(p) === 'RawLang') : undefined
  const block = delim.length >= 3 && parts.some((p) => kind(p) === 'RawTrimmed' && /\n/.test(src(p)))
  const lines = kids(n)
    .filter((p) => kind(p) === 'Text')
    .map(src)
  const named = [block || fields ? `block: ${block}` : '', lang ? `lang: ${str(src(lang))}` : ''].filter(Boolean)
  return `${c.use('raw')}(${named.length ? `{ ${named.join(', ')} }, ` : ''}${str(lines.join('\n'))})`
}

function equation(n: Node, scope: Scope): string {
  const inner = kids(n).slice(1, -1)
  const block = inner.length > 0 && kind(inner[0]!) === 'Space' && kind(inner.at(-1)!) === 'Space'
  const text = inner.map(src).join('').trim()
  if (!scope.rawOk) fail('equation inside a closure')
  const body = template(text)
  c.escapes++
  c.use('unsafeRaw')
  return block ? `unsafeRaw.math.block\`${body}\`` : `unsafeRaw.math\`${body}\``
}

interface Args {
  named: [string, string][]
  pos: string[]
}

/** Whether a parameter takes a file path (then a string literal becomes `path('…')`). */
const takesPath = (f: SpecFunc | undefined, name: string | number): boolean => {
  const params = f?.params ?? []
  const p =
    typeof name === 'number' ? params.filter((q) => q.positional)[name] : params.find((q) => camel(q.name) === name)
  return !!p && JSON.stringify((p as unknown as { input: unknown }).input).includes('"type":"path"')
}

function paramOf(f: SpecFunc | undefined, name: string | number): SpecParam | undefined {
  const params = f?.params ?? []
  return typeof name === 'number'
    ? params.filter((q) => q.positional)[name]
    : params.find((q) => camel(q.name) === name)
}

/** The Typst type names a parameter accepts. */
function typeNamesOf(p: SpecParam): Set<string> {
  return castNames((p as unknown as { input: { kind: string } }).input)
}

/** The type names of a cast (a parameter's input, a function's result). */
function castNames(cast: { kind: string; type?: string; of?: unknown[] }): Set<string> {
  const names = new Set<string>()
  const walk = (c: { kind: string; type?: string; of?: unknown[] }): void => {
    if (c.kind === 'union') (c.of as (typeof c)[]).forEach(walk)
    else names.add(c.kind === 'any' ? 'any' : c.kind === 'value' ? c.type! : c.type!)
  }
  walk(cast)
  return names
}

/** Names that a path parameter also takes as strings (`style: "apa"`). */
const pathNames = (f: SpecFunc | undefined, name: string | number): string[] => {
  const params = f?.params ?? []
  const p =
    typeof name === 'number' ? params.filter((q) => q.positional)[name] : params.find((q) => camel(q.name) === name)
  const json = JSON.stringify((p as unknown as { input: unknown } | undefined)?.input ?? {})
  return [
    ...json.matchAll(/"kind":"value","type":"str","value":"([^"]*)"/g),
    ...json.matchAll(/"type":"str","value":"([^"]*)"/g),
  ].map((m) => m[1]!)
}

/** The types a call of the standard library or a method of a known type can return. */
function resultTypes(v: Node, scope: Scope): Set<string> | null {
  const callee = sig(v)[0]!
  const method =
    kind(callee) === 'FieldAccess' && !stdPath(callee, scope) && typeOf(sig(callee)[0]!, scope)
      ? funcs.get(`${typeOf(sig(callee)[0]!, scope)}.${src(sig(callee)[2]!)}`)
      : undefined
  const returns = (stdPath(callee, scope) ? funcs.get(pathOf(callee)) : method)?.returns
  return returns ? castNames(returns) : null
}

/**
 * An operand of arithmetic whose result may be `none` (`datetime.today().year()`): `none` would be
 * an error in Typst, so the operand is assumed to be one of the other types, as a person would.
 */
function operand(n: Node, scope: Scope): string {
  const types = kind(n) === 'FuncCall' ? resultTypes(n, scope) : null
  if (!types?.has('none') || types.size < 2 || types.has('any')) return code(n, scope)
  const rest = [...types].filter((t) => t !== 'none')
  return `${c.use('assume')}<${rest.map((t) => `'${t}'`).join(' | ')}>(${code(n, scope)})`
}

function args(n: Node, scope: Scope, f?: SpecFunc): Args {
  const out: Args = { named: [], pos: [] }
  // A string where Typst takes a path is a path, unless it is one of the names the parameter takes.
  const asPath = (v: Node, key: string | number) =>
    kind(v) === 'Str' && takesPath(f, key) && !pathNames(f, key).includes(JSON.parse(typstString(src(v))))
  const value = (v: Node, key: string | number): string =>
    asPath(v, key)
      ? `${c.use('path')}(${typstString(src(v))})`
      : kind(v) === 'Array' && takesPath(f, key) && sig(v).some((e) => asPath(e, key))
        ? `[${sig(v)
            .filter((e) => !['LeftParen', 'RightParen', 'Comma'].includes(kind(e)))
            .map((e) => value(e, key))
            .join(', ')}]`
        : // A value the document computes is a file only through `unsafePath`, as a person would write it:
          // the document is the trusted template that computes it.
          takesPath(f, key) && kind(v) === 'Array'
          ? `[${sig(v)
              .filter((e) => !['LeftParen', 'RightParen', 'Comma'].includes(kind(e)))
              .map((e) => value(e, key))
              .join(', ')}]`
          : // `path(…)` and bytes (`bytes(…)`, `read(…, encoding: none)`, `cbor.encode(…)`) are files already.
            takesPath(f, key) && !['Str', 'None', 'Auto'].includes(kind(v)) && !isFileValue(v, scope)
            ? `${c.use('unsafePath')}(${codeOrRaw(v, scope)})`
            : (narrowed(v, key) ?? codeOrRaw(v, scope))
  /**
   * A field of `it` has the type its parameter accepts, often wider than the parameter it is passed to
   * (`pad(rest: it.inset)`). Where the two types overlap, assert the overlap with `assume`, as a person
   * would; where they do not, leave it to the type checker.
   */
  const narrowed = (v: Node, key: string | number): string | null => {
    const param = paramOf(f, key)
    if (!param) return null
    let have: Set<string>
    if (kind(v) === 'FieldAccess') {
      const [target, , field] = sig(v)
      const element = kind(target!) === 'Ident' ? ELEMENT_OF.get(scope.vars.get(src(target!)) ?? '') : undefined
      const fieldParam = element?.params.find((q) => camel(q.name) === camel(src(field!)))
      if (!fieldParam) return null
      have = typeNamesOf(fieldParam)
    } else if (kind(v) === 'FuncCall') {
      // A result typed as a union (`calc.rem` is an int, a float or a decimal) where one of them goes.
      const result = resultTypes(v, scope)
      if (!result) return null
      have = result
    } else return null
    const want = typeNamesOf(param)
    if (want.has('any') || [...have].every((t) => want.has(t))) return null
    const both = [...have].filter((t) => want.has(t))
    if (!both.length) return null
    const ts = [...new Set(both.flatMap((t) => (t === 'relative' ? ['length', 'ratio', 'relative'] : [t])))]
    return `${c.use('assume')}<${ts.map((t) => `'${t}'`).join(' | ')}>(${code(v, scope)})`
  }
  for (const a of sig(n)) {
    switch (kind(a)) {
      case 'LeftParen':
      case 'RightParen':
      case 'Comma':
        break
      case 'Named': {
        const [key, , v] = sig(a)
        out.named.push([camel(src(key!)), value(v!, camel(src(key!)))])
        break
      }
      case 'Spread':
        // `..values` where the function takes variadic arguments; it prints as it was, whatever the value.
        if (!f) fail("spread into a function that is not the standard library's")
        if (!f!.params.some((q) => q.variadic && q.positional))
          fail('spread into a function without variadic arguments')
        // In the types, a spread fills the variadic parameter only, not the ones before it (`self` of `selector.or`).
        if (out.pos.length < f!.params.filter((q) => q.positional && !q.variadic).length)
          fail('spread before the variadic arguments')
        out.pos.push(`${c.use('spread')}(${codeOrRaw(sig(a).at(-1)!, scope)})`)
        break
      case 'ContentBlock':
        out.pos.push(content(sig(a)[1]!, scope))
        break
      default:
        out.pos.push(value(a, out.pos.length))
    }
  }
  return out
}

/** A plain object for a dictionary → the same with its keys as written, for `dict`. */
const DICT_FORMS = new Map<string, string>()

function argList(a: Args, user = false): string {
  const named = a.named.length ? [`{ ${a.named.map(([k, v]) => `${k}: ${v}`).join(', ')} }`] : []
  // A plain object first would be the named arguments of a function the document defines or
  // imports: a positional dictionary is a `dict` there.
  const pos = a.pos.map((p, i) =>
    user && i === 0 && !named.length && DICT_FORMS.has(p) ? `${c.use('dict')}(${DICT_FORMS.get(p)})` : p,
  )
  return [...named, ...pos].join(', ')
}

const isColor = (n: Node): boolean =>
  (kind(n) === 'Ident' && (COLORS.has(src(n)) || src(n) === 'conifer' || src(n) === 'forest')) ||
  (kind(n) === 'FuncCall' && ['rgb', 'luma', 'cmyk', 'oklab', 'oklch'].includes(src(sig(n)[0]!))) ||
  (kind(n) === 'FuncCall' && kind(sig(n)[0]!) === 'FieldAccess' && isColor(sig(sig(n)[0]!)[0]!))

/**
 * `text(red, 12pt, [x])` and `set text(red)`: Typst takes some settings positionally
 * by type; the API names them.
 */
function stylePositionals(path: string, n: Node, a: Args, scope: Scope): void {
  const positional = sig(n).filter((k) => !['LeftParen', 'RightParen', 'Comma', 'Named'].includes(kind(k)))
  // Typst finds the alignment among the positionals by its type: `align([body], horizon)`.
  if (path === 'align' && a.pos.length === 2 && kind(positional[0]!) === 'ContentBlock') a.pos.reverse()
  // `stroke(2pt)`, `stroke(red)`: Typst finds the thickness and the paint by their types.
  if (path === 'stroke') {
    const keep: string[] = []
    positional.forEach((p, i) => {
      if (kind(p) === 'Numeric' && /(pt|mm|cm|in|em)$/.test(src(p))) a.named.push(['thickness', a.pos[i]!])
      else if (isColor(p)) a.named.push(['paint', a.pos[i]!])
      else keep.push(a.pos[i]!)
    })
    a.pos = keep
    return
  }
  if (path !== 'text' && path !== 'page') return
  const keep: string[] = []
  positional.forEach((p, i) => {
    if (path === 'page' && kind(p) === 'Str') a.named.push(['paper', a.pos[i]!])
    else if (path === 'page') keep.push(a.pos[i]!)
    else if (kind(p) === 'Numeric' && /(pt|mm|cm|in|em)$/.test(src(p))) a.named.push(['size', a.pos[i]!])
    else if (isColor(p)) a.named.push(['fill', a.pos[i]!])
    else keep.push(a.pos[i]!)
  })
  // Typst also finds `size` and `fill` among the positionals by their type, which only Typst knows here.
  if (path === 'text' && keep.length > 1) fail('positional text argument of unknown type')
  a.pos = keep
  void scope
}

function call(n: Node, scope: Scope): string {
  const [callee, argsNode] = sig(n)
  // `heading.where(level: 1)`, `f.with(…)`, methods.
  if (kind(callee!) === 'FieldAccess') {
    const [target, , field] = sig(callee!)
    const name = src(field!)
    const base = stdPath(target!, scope)
    if (name === 'where' && base) {
      const a = args(argsNode!, scope)
      if (a.pos.length) fail('positional where')
      // Only fields that the bindings know (synthesized fields are not in the reflection).
      const params = funcs.get(pathOf(target!))?.params.map((q) => camel(q.name)) ?? []
      if (a.named.some(([k]) => !params.includes(k))) fail('where on an unknown field')
      return `${c.use('where')}(${base}, { ${a.named.map(([k, v]) => `${k}: ${v}`).join(', ')} })`
    }
    if (name === 'with' && base) {
      return `${base}.with(${argList(args(argsNode!, scope, ALL.get(pathOf(target!))))})`
    }
  }
  const p = stdPath(callee!, scope)
  // A symbol cannot be called (`math.hat(x)` is an accent function, not `sym.hat`).
  if (p && /^(sym|emoji)\./.test(p)) fail('call of a symbol')
  if (p) {
    const path = pathOf(callee!)
    if (path === 'label' && !(sig(argsNode!).length === 3 && kind(sig(argsNode!)[1]!) === 'Str'))
      fail('label from a value')
    // `path("…")` itself takes the string.
    const a = args(argsNode!, scope, path === 'path' ? undefined : ALL.get(path))
    stylePositionals(path, argsNode!, a, scope)
    const f = funcs.get(path)
    const ctx = f?.contextual ? (scope.ctx ?? fail('contextual call outside context')) : null
    return `${p}(${[ctx, argList(a)].filter(Boolean).join(', ')})`
  }
  // A method on a value of one known type: every such value has the methods of its type.
  if (kind(callee!) === 'FieldAccess' && !stdPath(callee!, scope)) {
    const [target, , field] = sig(callee!)
    const type = typeOf(target!, scope)
    if (type) {
      const method = funcs.get(`${type}.${src(field!)}`)
      if (!method) fail('unknown method')
      const ctx = method!.contextual ? (scope.ctx ?? fail('contextual method outside context')) : null
      // The method's parameters without `self`, so that its arguments convert like a function's.
      const a = args(argsNode!, scope, { ...method!, params: method!.params.slice(1) })
      // A literal is a JS value (a string, an array, an object): `data` makes it a Typst value, which has methods.
      const js = code(target!, scope)
      const self =
        ['Str', 'Array'].includes(kind(target!)) || (kind(target!) === 'Dict' && js.startsWith('{'))
          ? `${c.use('data')}(${js})`
          : js
      return `${self}.${camel(src(field!))}(${[ctx, argList(a)].filter(Boolean).join(', ')})`
    }
  }
  // A function an import brings: `f(…)`, `m.f(…)` and their `.with(…)`.
  const importedFn = (n: Node) =>
    kind(n) === 'Ident' ? fromImport(src(n), scope) : kind(n) === 'FieldAccess' ? moduleMember(n, scope) : null
  const importedCallee =
    importedFn(callee!) ??
    (kind(callee!) === 'FieldAccess' && src(sig(callee!)[2]!) === 'with' ? importedFn(sig(callee!)[0]!) : null)
  if (importedCallee) {
    const withOnly =
      kind(callee!) === 'FieldAccess' && src(sig(callee!)[2]!) === 'with' && !moduleMember(callee!, scope)
    recordCall(importedCallee, argsNode!, withOnly)
    return `${importedCallee.v}${withOnly ? '.with' : ''}(${argList(args(argsNode!, scope), true)})`
  }
  // A function the document defined.
  if (kind(callee!) === 'Ident' && scope.vars.has(src(callee!)) && DEFINED.has(scope.vars.get(src(callee!))!)) {
    return `${scope.vars.get(src(callee!))}(${argList(args(argsNode!, scope), true)})`
  }
  if (kind(callee!) === 'FieldAccess') return fail('method on a value of unknown type')
  // A function the document bound (`let f = …`, a destructured name): only Typst knows its signature.
  if (kind(callee!) === 'Ident' && scope.vars.get(src(callee!)) === RAW_VAR)
    return fail(`name ${src(callee!)} bound by a snippet`)
  if (kind(callee!) === 'Ident' && scope.vars.has(src(callee!))) {
    // `call` takes a JS array as content: an array value is `data(…)`.
    const a = args(argsNode!, scope)
    const items = sig(argsNode!).filter((k) => !['LeftParen', 'RightParen', 'Comma', 'Named'].includes(kind(k)))
    a.pos = a.pos.map((p, i) => (kind(items[i]!) === 'Array' ? `${c.use('data')}(${p})` : p))
    return `${c.use('call')}(${[scope.vars.get(src(callee!))!, argList(a, true)].filter(Boolean).join(', ')})`
  }
  return fail(`call of ${kind(callee!) === 'Ident' ? 'an unknown name' : `a ${kind(callee!)}`}`)
}

/** The Typst types of bindings, by JS variable, when the bindings give them one type. */
const VAR_TYPES = new Map<string, string>()

/** The one type a function returns, as the bindings type it (an element is content), else null. */
function returnType(f: SpecFunc | undefined): string | null {
  if (!f) return null
  if (f.element) return 'content'
  return f.returns?.kind === 'type' ? f.returns.type! : null
}

/**
 * The Typst type of an expression when the bindings give it exactly one, so
 * that its value has the methods of that type; else null.
 */
/** A value the library takes as a file as it is: `path(…)`, or bytes. */
function isFileValue(v: Node, scope: Scope): boolean {
  if (/^(path|bytes)\(/.test(src(v))) return true
  if (typeOf(v, scope) === 'bytes') return true
  if (kind(v) !== 'FuncCall') return false
  if (/^read\(/.test(src(v))) return /encoding:\s*none/.test(src(v))
  const types = resultTypes(v, scope)
  return !!types && types.size === 1 && types.has('bytes')
}

/** Constants of the standard library that are no colors, with their types. */
const STD_CONSTANTS = new Map<string, string>([
  ...['ltr', 'rtl', 'ttb', 'btt'].map((d): [string, string] => [d, 'direction']),
  ...['start', 'end', 'left', 'center', 'right', 'top', 'horizon', 'bottom'].map((a): [string, string] => [
    a,
    'alignment',
  ]),
])

/** The type of a numeric literal (`6pt`, `90deg`, `50%`, `1fr`). */
function numericType(text: string): string | null {
  const unit = /[a-z%]+$/.exec(text)?.[0]
  if (!unit) return null
  if (['pt', 'mm', 'cm', 'in', 'em'].includes(unit)) return 'length'
  if (['deg', 'rad'].includes(unit)) return 'angle'
  if (unit === '%') return 'ratio'
  if (unit === 'fr') return 'fraction'
  return null
}

function typeOf(n: Node, scope: Scope): string | null {
  switch (kind(n)) {
    case 'Numeric':
      return numericType(src(n))
    case 'Parenthesized':
      return typeOf(sig(n)[1]!, scope)
    case 'Str':
      return 'str'
    case 'Array':
      return 'array'
    case 'Dict':
      return 'dictionary'
    case 'Binary': {
      // `"a" + b` is a string (or an error); `6pt + 10em` is a length, as are both sides.
      const [l, op, r] = sig(n)
      if (src(op!) === '+' && (typeOf(l!, scope) === 'str' || typeOf(r!, scope) === 'str')) return 'str'
      const [lt, rt] = [typeOf(l!, scope), typeOf(r!, scope)]
      return ['+', '-'].includes(src(op!)) && lt === rt && ['length', 'angle', 'ratio', 'fraction'].includes(lt ?? '')
        ? lt
        : null
    }
    case 'Ident': {
      const v = scope.vars.get(src(n))
      // A binding the document assigns to (`x = …`) may change type: it has none fixed.
      if (v && reassigned().has(src(n))) return null
      if (v) return VAR_TYPES.get(v) ?? null
      return COLORS.has(src(n)) ? 'color' : (STD_CONSTANTS.get(src(n)) ?? null)
    }
    case 'FieldAccess': {
      if (stdPath(n, scope)) return VALUE_PATHS.get(pathOf(n)) ?? null
      // A field of the element of a show rule, when its parameter takes one type.
      const [target, , field] = sig(n)
      const element = kind(target!) === 'Ident' ? ELEMENT_OF.get(scope.vars.get(src(target!)) ?? '') : undefined
      const param = element?.params.find((q) => camel(q.name) === camel(src(field!)))
      const names = param ? [...typeNamesOf(param)] : []
      return names.length === 1 && names[0] !== 'any' ? names[0]! : null
    }
    case 'FuncCall': {
      const callee = sig(n)[0]!
      if (kind(callee) === 'Ident' && ['rgb', 'luma'].includes(src(callee)) && !scope.vars.has(src(callee)))
        return 'color'
      if (stdPath(callee, scope)) return returnType(funcs.get(pathOf(callee)))
      if (kind(callee) === 'FieldAccess') {
        const type = typeOf(sig(callee)[0]!, scope)
        return type ? returnType(funcs.get(`${type}.${src(sig(callee)[2]!)}`)) : null
      }
      return null
    }
    default:
      return null
  }
}

/** The type of the reference that `let_` returns for a value: the value's type, as `ExprOf` in rules.ts. */
function bindingType(n: Node, scope: Scope): string | null {
  if (kind(n) === 'Array') return 'array'
  if (kind(n) === 'Dict') return 'dictionary'
  if (kind(n) === 'ContentBlock') return 'content'
  return typeOf(n, scope)
}

const DEFINED = new Set<string>()

/** Fields of the element bound to a show-rule parameter, by JS variable. */
const ELEMENT_FIELDS = new Map<string, string[]>()
let pendingFields: string[] | null = null
/** The element bound to a show-rule parameter, by JS variable (for the types of its fields). */
const ELEMENT_OF = new Map<string, SpecFunc>()
let pendingElement: SpecFunc | null = null

function closure(n: Node, scope: Scope): string {
  const params = sig(sig(n)[0]!).filter(
    (k) => kind(k) !== 'LeftParen' && kind(k) !== 'RightParen' && kind(k) !== 'Comma',
  )
  if (kind(sig(n)[0]!) !== 'Params' && kind(sig(n)[0]!) !== 'Ident') fail('closure')
  const names =
    kind(sig(n)[0]!) === 'Ident'
      ? [src(sig(n)[0]!)]
      : // `_` is a parameter the body does not use: any name does.
        params.map((p) => (kind(p) === 'Ident' ? src(p) : kind(p) === 'Underscore' ? '_' : fail('closure parameter')))
  const vars = new Map(scope.vars)
  const fields = pendingFields
  const element = pendingElement
  pendingFields = null
  pendingElement = null
  const js = names.map((name) => {
    const v = c.fresh(name === '_' ? 'unused' : name)
    if (name !== '_') vars.set(name, v)
    if (fields && names.length === 1) ELEMENT_FIELDS.set(v, fields)
    if (element && names.length === 1) ELEMENT_OF.set(v, element)
    // The element of a show rule is content (`it.func()`).
    if (fields && names.length === 1) VAR_TYPES.set(v, 'content')
    return v
  })
  // The printer names closure parameters itself (`x2` in a closure nested in another); a snippet
  // in the body would name the original.
  const depth = scope.closures ?? 0
  const printed = (names.length === 1 ? ['it'] : ['x', 'y', 'z', 'w'].slice(0, names.length)).map((p) =>
    depth ? `${p}${depth + 1}` : p,
  )
  const inner: Scope = {
    vars,
    ctx: scope.ctx,
    rawOk: names.every((name, i) => name === printed[i]) && scope.rawOk,
    nested: true,
    closures: depth + 1,
  }
  const body = sig(n).at(-1)!
  const value = kind(body) === 'ContentBlock' ? content(sig(body)[1]!, inner) : codeOrRaw(body, inner)
  // An object literal as an arrow's body needs parentheses, or it reads as a block.
  return `(${js.join(', ')}) => ${value.startsWith('{') ? `(${value})` : value}`
}

// ---------------------------------------------------------------------------
// Statements.

function stmt(n: Node, scope: Scope): string {
  switch (kind(n)) {
    case 'SetRule': {
      const parts = sig(n)
      // `set … if cond`: the condition is Typst's (a snippet when the API has no comparison).
      const ifAt = parts.findIndex((p) => kind(p) === 'If')
      const cond = ifAt >= 0 ? `, { if: ${codeOrRaw(parts[ifAt + 1]!, scope)} }` : ''
      const target = parts[1]!
      const p = stdPath(target, scope) ?? fail('set target')
      const path = pathOf(target)
      const a = args(parts[2]!, scope, ALL.get(path))
      stylePositionals(path, parts[2]!, a, scope)
      const f = funcs.get(path)
      // Positional settable fields (`set align(center)`).
      const posFields = (f?.params ?? []).filter((q) => q.positional && q.settable && !q.variadic)
      if (a.pos.length > posFields.length) fail('positional set argument')
      a.pos.forEach((v, i) => a.named.push([camel(posFields[i]!.name), v]))
      return `${c.use('set')}(${p}, { ${a.named.map(([k, v]) => `${k}: ${v}`).join(', ')} }${cond})`
    }
    case 'ShowRule': {
      const parts = sig(n)
      const colon = parts.findIndex((p) => kind(p) === 'Colon')
      const selector = colon > 1 ? parts[1]! : null
      const transform = parts[colon + 1]!
      const sel = selector ? selectorCode(selector, scope) : null
      let repl: string
      if (kind(transform) === 'SetRule') repl = stmt(transform, scope)
      else if (kind(transform) === 'Closure') {
        const ctx = c.fresh('ctx')
        // The fields that `it` has: the parameters of the selected element (synthesized fields are unknown).
        const elem = selector && kind(selector) === 'FuncCall' ? sig(sig(selector)[0]!)[0]! : selector
        const spec =
          elem && (kind(elem) === 'Ident' || kind(elem) === 'FieldAccess') ? funcs.get(pathOf(elem)) : undefined
        pendingFields = spec ? spec.params.map((q) => camel(q.name)) : null
        pendingElement = spec ?? null
        const fn = closure(transform, { ...scope, ctx })
        pendingFields = null
        // show closures get the context token as second argument
        repl = fn.replace(/^\(([^)]*)\) =>/, (_, ps: string) => `(${ps}${ps ? ', ' : ''}${ctx}) =>`)
      } else repl = kind(transform) === 'ContentBlock' ? content(sig(transform)[1]!, scope) : code(transform, scope)
      return `${c.use('show')}(${sel ? `${sel}, ` : ''}${repl})`
    }
    case 'LetBinding': {
      const parts = sig(n)
      const target = parts[1]!
      // A binding inside a closure or a context is local there; the converted code hoists bindings.
      if (scope.nested) fail('let inside a closure or context')
      if (kind(target) === 'Ident') {
        const name = src(target)
        if (name === 'std') fail('let std')
        // Raw text bound to a name keeps the fields markup sets (`block`), which `raw(…)` leaves unset.
        const value = parts[3]
          ? kind(parts[3]) === 'Raw'
            ? rawElement(parts[3], true)
            : // A JS array bound by `let_` is typed as content when it could hold markup: an array literal is
              // data (unless it holds dictionaries, whose keys `data` keeps as written, not in kebab-case).
              kind(parts[3]) === 'Array' && !hasKind(parts[3], 'Dict')
              ? `${c.use('data')}(${code(parts[3], scope)})`
              : code(parts[3], scope)
          : fail('let without value')
        const v = c.fresh(name)
        const type = bindingType(parts[3]!, scope)
        if (type) VAR_TYPES.set(v, type)
        const d = c.fresh(`${name}Decl`)
        c.decls.push(`const [${d}, ${v}] = ${c.use('let_')}(${str(name)}, ${value})`)
        scope.vars.set(name, v)
        return d
      }
      if (kind(target) === 'Closure') return defineFn(target, parts, scope)
      // `let (a, _, b) = value`: names (or `_`) only, by position or by key.
      if (kind(target) === 'Destructuring') {
        const items = sig(target).filter((k) => !['LeftParen', 'RightParen', 'Comma'].includes(kind(k)))
        if (!items.length || items.some((k) => !['Ident', 'Underscore'].includes(kind(k)))) fail('let pattern')
        if (!parts[3]) fail('let without value')
        const value = code(parts[3]!, scope)
        const names = items.map((k) => (kind(k) === 'Ident' ? src(k) : null))
        if (names.includes('std')) fail('let std')
        const vars = names.map((name) => (name === null ? '' : c.fresh(name)))
        const d = c.fresh('patternDecl')
        c.decls.push(
          `const [${d}, [${vars.join(', ')}]] = ${c.use('let_')}([${names.map((x) => (x === null ? 'null' : str(x))).join(', ')}], ${value})`,
        )
        names.forEach((name, i) => name !== null && scope.vars.set(name, vars[i]!))
        return d
      }
      return fail('let pattern')
    }
    case 'ModuleInclude':
      return includeCode(n)
    case 'ModuleImport': {
      const parts = sig(n)
      // Only file and package imports: a module or function scope (`import enum: item`) has no API.
      if (kind(parts[1]!) !== 'Str') fail('import from a value')
      const source = JSON.parse(typstString(src(parts[1]!))) as string
      if (scope.nested) fail('import inside a closure or context')
      const items = parts.find((p) => kind(p) === 'ImportItems')
      const star = parts.some((p) => kind(p) === 'Star')
      const as = parts.findIndex((p) => kind(p) === 'As')
      if (!items && !star) {
        // A module: `import "x" as m`, or `import "x"`, which names it after the package or the file.
        const name =
          as >= 0
            ? src(parts[as + 1]!)
            : source.startsWith('@')
              ? /^@[^/]+\/([^:]+):/.exec(source)![1]!
              : source.replace(/^.*\//, '').replace(/\.typ$/, '')
        if (name === 'std' || scope.vars.has(name) || c.modules.has(name)) fail('module name taken')
        // Declared before the members that refer to it.
        const v = c.fresh(name)
        c.moduleDecls.push(`const ${v} = ${c.use('external')}(${str(name)})`)
        c.modules.set(name, v)
        return `${c.use(source.startsWith('@') ? 'importPackage' : 'importFile')}(${str(source)}, ${v})`
      }
      if (as >= 0) fail('import as a module with items')
      const names: (string | { name: string; original: string })[] = []
      if (star) {
        // A file next to the document: only a template's project has it.
        if (!source.startsWith('@') && !c.project) fail('* import of a file')
        // What the module exports and the document names, also in snippets: the import lists those.
        const exports = new Set(moduleExports(source))
        const used = [...new Set(identsIn(c.tree))].filter((name) => exports.has(name))
        // With nothing to list, `import "x"` would bind the module's name instead: the statement is a snippet.
        // A name that two `*` imports export goes in both lists, so that the later one wins, as in Typst.
        if (!used.length) fail('* import of names the document does not use')
        for (const name of used) {
          c.importedName(name)
          names.push(name)
        }
      } else
        for (const item of sig(items!).filter((k) => kind(k) !== 'Comma')) {
          // `a`, or `a as b`.
          const path = kind(item) === 'RenamedImportItem' ? sig(item)[0]! : item
          if (kind(path) !== 'ImportItemPath' || sig(path).length !== 1) fail('nested import item')
          const original = src(sig(path)[0]!)
          const name = kind(item) === 'RenamedImportItem' ? src(sig(item).at(-1)!) : original
          if (name === 'std') fail('import std')
          if (scope.vars.has(name)) fail('import shadows a binding')
          c.importedName(name)
          names.push(name === original ? name : { name, original })
        }
      const token = `\u0000import${c.importStmts.length}`
      c.importStmts.push({ token, names })
      return source.startsWith('@')
        ? `${c.use('importPackage')}(${str(source)}, ${token})`
        : `${c.use('importFile')}(${str(source)}, ${token})`
    }
    default:
      return fail(kind(n))
  }
}

function defineFn(target: Node, parts: Node[], scope: Scope): string {
  const [nameNode, params] = sig(target)
  const name = src(nameNode!)
  if (name === 'std') fail('function std')
  const vars = new Map(scope.vars)
  let builder = `${c.use('define')}(${str(name)})`
  const refs: string[] = []
  for (const p of sig(params!).filter((k) => !['LeftParen', 'RightParen', 'Comma'].includes(kind(k)))) {
    if (kind(p) === 'Ident') {
      if (src(p) === 'std') fail('parameter std')
      builder += `.pos(${str(src(p))}, ${c.use('T')}.any)`
      refs.push(src(p))
    } else if (kind(p) === 'Named') {
      const [k, , def] = sig(p)
      if (src(k!) === 'std') fail('parameter std')
      builder += `.named(${str(src(k!))}, ${c.use('T')}.any, ${code(def!, scope)})`
      refs.push(src(k!))
    } else if (kind(p) === 'Spread') {
      if (
        sig(params!)
          .slice(sig(params!).indexOf(p) + 1)
          .some((q) => kind(q) === 'Ident')
      )
        fail('positional after ..rest')
      const restName = sig(p)[1]
      if (!restName || src(restName) === 'std') fail('rest parameter')
      builder += `.rest(${str(src(restName!))}, ${c.use('T')}.any)`
      refs.push(src(restName!))
    } else fail('parameter pattern')
  }
  for (const r of refs) vars.set(r, `p[${str(camel(r))}]`)
  // `let f(x) = body`: the body is the closure's last child.
  void parts
  const body = sig(target).at(-1)!
  // Bindings in the body would be hoisted out of it, away from its parameters: they are snippets.
  const inner: Scope = { vars, ctx: scope.ctx, rawOk: scope.rawOk, nested: true }
  let value = kind(body) === 'ContentBlock' ? content(sig(body)[1]!, inner) : codeOrRaw(body, inner)
  // A JS array as the body would be content: an array literal is a Typst array.
  if (kind(body) === 'Array' && value.startsWith('[')) value = `${c.use('data')}(${value})`
  const v = c.fresh(name)
  // A Typst function has no declared result type: unless its body is markup, it is any value.
  if (kind(body) !== 'ContentBlock') builder += `.returns(${c.use('T')}.any)`
  // An object literal as an arrow's body needs parentheses, or it reads as a block.
  c.decls.push(`const ${v} = ${builder}.body((p) => ${value.startsWith('{') ? `(${value})` : value})`)
  DEFINED.add(v)
  scope.vars.set(name, v)
  return `${v}.decl`
}

function selectorCode(n: Node, scope: Scope): string {
  if (kind(n) === 'Str') return typstString(src(n))
  if (kind(n) === 'Label') return `${c.use('label')}(${str(src(n).slice(1, -1))})`
  return code(n, scope)
}

/** A statement in markup, or a snippet of it. */
const RAW_VAR = '\u0000raw'

function stmtOrRaw(n: Node, scope: Scope): string {
  const mark = c.escapes
  try {
    return stmt(n, scope)
  } catch (e) {
    if (!(e instanceof Unsupported)) throw e
    // Later uses of what a snippet binds must be snippets too: they never mean the standard library's.
    for (const name of snippetBinds(n)) scope.vars.set(name, RAW_VAR)
    c.escapes = mark
    c.fallbacks.push(e.message)
    return raw('markup', '#' + src(n), scope)
  }
}

/** The names a statement binds: a `let` (also a pattern), or an import (also `*` from a package). */
function snippetBinds(n: Node): string[] {
  const parts = sig(n)
  if (kind(n) === 'LetBinding') {
    const target = parts[1]!
    if (kind(target) === 'Ident') return [src(target)]
    if (kind(target) === 'Closure') return [src(sig(target)[0]!)]
    return identsIn(target)
  }
  if (kind(n) !== 'ModuleImport' || kind(parts[1]!) !== 'Str') return []
  const source = JSON.parse(typstString(src(parts[1]!))) as string
  const as = parts.findIndex((p) => kind(p) === 'As')
  const items = parts.find((p) => kind(p) === 'ImportItems')
  const names: string[] = []
  if (as >= 0) names.push(src(parts[as + 1]!))
  if (items)
    for (const item of sig(items).filter((k) => kind(k) !== 'Comma'))
      names.push(src(kind(item) === 'RenamedImportItem' ? sig(item).at(-1)! : sig(item).at(-1)!))
  if (parts.some((p) => kind(p) === 'Star') && (source.startsWith('@') || c.project)) {
    try {
      names.push(...moduleExports(source))
    } catch {
      // A package that does not load: the snippet fails in Typst anyway.
    }
  }
  if (!items && as < 0 && !parts.some((p) => kind(p) === 'Star'))
    names.push(
      source.startsWith('@')
        ? /^@[^/]+\/([^:]+):/.exec(source)![1]!
        : source.replace(/^.*\//, '').replace(/\.typ$/, ''),
    )
  return names
}

// ---------------------------------------------------------------------------
// Markup.

const SHORTHAND_SYMS: Record<string, string> = {
  '~': 'space.nobreak',
  '--': 'dash.en',
  '---': 'dash.em',
  '-?': 'hyph.soft',
  '...': 'dots.h',
  '-': 'minus',
}
/** Characters the library escapes wherever they are in markup text (escape.ts, MARKUP_SPECIAL). */
const ALWAYS_ESCAPED = new Set('\\#$*_`@~\'"')

/** A JS string literal that shows invisible characters as escapes (`'\u{a0}'`), not as themselves. */
function visibleStr(text: string): string {
  return str(text).replace(/[\p{Cc}\p{Cf}\p{Z}\p{Mn}]/gu, (ch) =>
    ch === ' ' ? ch : `\\u{${ch.codePointAt(0)!.toString(16)}}`,
  )
}

function escapeText(text: string): string {
  const m = /^\\u\{([0-9a-fA-F]+)\}$/.exec(text)
  return m ? String.fromCodePoint(parseInt(m[1]!, 16)) : text.slice(1)
}

/** A block of the body: a paragraph (inline parts) or a block-level part. */
type Part = (
  | { inline: string[] }
  | { block: string; heading?: { level: number; body: string } }
  | { list: 'list' | 'enum' | 'terms'; items: string[]; tight: boolean }
  | { lines: Part[] }
) & { joined?: boolean }

const STMTS = new Set(['SetRule', 'ShowRule', 'LetBinding', 'ModuleImport', 'ModuleInclude'])

/** Converts markup into block parts. */
function markup(n: Node, scope: Scope, group = true): Part[] {
  const parts: Part[] = []
  let par: string[] = []
  // Whether a paragraph break came since the last part: if not, the next part follows on the next line.
  let sawBreak = true
  const add = (part: Part) => {
    part.joined = !sawBreak
    sawBreak = false
    parts.push(part)
  }
  const flush = () => {
    while (par.length && isSpace(par.at(-1)!)) par.pop()
    while (par.length && isSpace(par[0]!)) par.shift()
    if (par.length) add({ inline: joinText(par) })
    par = []
  }
  const items = kids(n)
  for (let i = 0; i < items.length; i++) {
    const it = items[i]!
    const k = kind(it)
    switch (k) {
      case 'Text':
        par.push(str(src(it)))
        break
      case 'Space': {
        // A line break in the source is a space that Typst drops between CJK characters; elsewhere it is a space.
        const before = par.length && par.at(-1)!.startsWith('"') ? (JSON.parse(par.at(-1)!) as string).slice(-1) : ''
        const after = items[i + 1] ? src(items[i + 1]!).charAt(0) : ''
        const line = src(it).includes('\n') && (CJK.test(before) || CJK.test(after))
        if (par.length && !isSpace(par.at(-1)!)) par.push(line ? LINE_SPACE : SPACE)
        break
      }
      case 'Parbreak':
        flush()
        sawBreak = true
        continue
      case 'LineComment':
      case 'BlockComment':
        break
      case 'Semicolon':
        // A `;` that ends an embedded expression after spaces (`#foo ;B`) is syntax, not text.
        break
      case 'Escape': {
        // In Typst an escape makes a symbol, not text (it differs in math). A character the library always
        // escapes (`$`, `#`, `*`…) prints as the same escape from plain text.
        const ch = escapeText(src(it))
        par.push(ALWAYS_ESCAPED.has(ch) && src(it) === `\\${ch}` ? str(ch) : `${c.use('symbol')}(${visibleStr(ch)})`)
        break
      }
      case 'Shorthand': {
        // A shorthand is a symbol, an element of its own (`a---b` is `a`, `—`, `b`), like an escape: written
        // as the named symbol it is (`sym.dash.em`), which prints the same element.
        const name = SHORTHAND_SYMS[src(it)] ?? fail(`shorthand ${src(it)}`)
        par.push(`${c.use('sym')}.${name}`)
        break
      }
      case 'SmartQuote':
        // A marker: the quote itself in an `inline` template, `smartquote(…)` elsewhere (spaceCode).
        par.push(`smartquote({ double: ${src(it) === '"'} })`)
        break
      case 'Linebreak':
        if (src(it) !== '\\') fail('justified linebreak')
        par.push(`${c.use('linebreak')}()`)
        break
      case 'Strong':
        par.push(`${c.use('strong')}(${content(sig(it)[1]!, scope)})`)
        break
      case 'Emph':
        par.push(`${c.use('emph')}(${content(sig(it)[1]!, scope)})`)
        break
      case 'Raw':
        par.push(rawElement(it))
        break
      case 'Link':
        par.push(`${c.use('link')}(${str(src(it))})`)
        break
      case 'Equation':
        par.push(equation(it, scope))
        break
      case 'Ref': {
        const target = src(sig(it)[0]!).slice(1)
        const supplement = sig(it)[1]
        par.push(
          `${c.use('ref')}(${supplement ? `{ supplement: ${content(sig(supplement)[1]!, scope)} }, ` : ''}${c.use('label')}(${str(target)}))`,
        )
        break
      }
      case 'Label': {
        // A label attaches to the element before it.
        let j = par.length - 1
        while (j >= 0 && isSpace(par[j]!)) j--
        const name = src(it).slice(1, -1)
        if (j < 0) {
          // Nothing before it in this paragraph: it attaches to the last element before, across
          // paragraph breaks (Typst ignores them), or to the heading just before it.
          const last = parts.at(-1)
          if (last && 'heading' in last && last.heading) {
            parts[parts.length - 1] = {
              inline: [
                // `= x` is a heading of that depth (its level also counts an offset).
                attach(
                  `${c.use('heading')}({ depth: ${last.heading.level} }, inline(${last.heading.body}))`,
                  name,
                  scope,
                ),
              ],
              joined: last.joined,
            }
            c.use('inline')
            break
          }
          if (last && 'inline' in last) {
            let k = last.inline.length - 1
            while (k >= 0 && isSpace(last.inline[k]!)) k--
            if (k >= 0) {
              last.inline[k] = attach(last.inline[k]!, name, scope)
              break
            }
          }
          fail('label without element')
        }
        // Spaces between the element and the label stay, as in the source.
        const spaces = par.length - 1 - j
        if (ASCII_LABEL.test(name)) {
          const target = spaces ? `[${par[j]!}, ${c.use('space')}]` : par[j]!
          par[j] = attach(target, name, scope)
          par.length = j + 1
        } else {
          // In a snippet, the label goes on the element itself; the spaces stay after it.
          par[j] = attach(par[j]!, name, scope)
          par.length = j + 1
          if (spaces) par.push(c.use('space'))
        }
        break
      }
      case 'Heading': {
        flush()
        const level = src(sig(it)[0]!).length
        const body = sig(it)[1]!
        const labelNode = kids(body)
          .filter((x) => kind(x) !== 'Space')
          .at(-1)
        if (labelNode && kind(labelNode) === 'Label') {
          const inner = { ...body, 1: kids(body).filter((x) => x !== labelNode) } as Node
          add({
            inline: [
              attach(
                `${c.use('heading')}({ depth: ${level} }, ${content(inner, scope)})`,
                src(labelNode).slice(1, -1),
                scope,
              ),
            ],
          })
        } else {
          const text = inlineOf(body, scope)
          add({ block: `${c.use('m')}.heading(${level}, ${text})`, heading: { level, body: text } })
        }
        break
      }
      case 'ListItem':
      case 'EnumItem':
      case 'TermItem': {
        flush()
        const listKind = k === 'ListItem' ? 'list' : k === 'EnumItem' ? 'enum' : 'terms'
        const last = parts.at(-1)
        const item = listItem(it, listKind, scope)
        if (last && 'list' in last && last.list === listKind) {
          if (sawBreak) last.tight = false
          sawBreak = false
          last.items.push(item)
        } else {
          add({ list: listKind, items: [item], tight: true })
        }
        break
      }
      case 'Hash': {
        const expr = items[++i]!
        // A statement on its own line is a block; one followed by more of its line is a rule in that line.
        let after = i + 1
        if (items[after] && kind(items[after]!) === 'Semicolon') after++
        const next = items[after]
        const ownLine = !next || (kind(next) === 'Space' && /\n/.test(src(next))) || kind(next) === 'Parbreak'
        if (STMTS.has(kind(expr)) && par.every(isSpace) && ownLine) {
          // A statement on its own line.
          flush()
          add({ block: stmtOrRaw(expr, scope) })
          // A `;` after an embedded expression ends it.
          if (items[i + 1] && kind(items[i + 1]!) === 'Semicolon') i++
        } else if (kind(expr) === 'ContentBlock') {
          // `#[…]` in a line: content, even when it holds paragraphs.
          par.push(`${c.use('contentBlock')}(${content(sig(expr)[1]!, scope)})`)
        } else if (kind(expr) === 'Str') {
          // A string value shown in markup (`#""` still makes a text element).
          par.push(`${c.use('data')}(${typstString(src(expr))})`)
        } else if (isNumber(expr)) {
          // A number shown in markup, formatted by Typst.
          par.push(`${c.use('data')}(${code(expr, scope)})`)
        } else if (kind(expr) === 'Array') {
          // An array shown in markup is a value, not a sequence of parts.
          par.push(`${c.use('array')}(${codeOrRaw(expr, scope)})`)
        } else {
          if (STMTS.has(kind(expr))) {
            // A rule in a line; a snippet of one can only stand on its own line.
            let converted: string | null = null
            try {
              converted = stmt(expr, scope)
            } catch (e) {
              if (!(e instanceof Unsupported)) throw e
            }
            if (converted) par.push(converted)
            else {
              flush()
              add({ block: stmtOrRaw(expr, scope) })
            }
          } else par.push(codeOrRaw(expr, scope))
          if (items[i + 1] && kind(items[i + 1]!) === 'Semicolon') i++
        }
        break
      }
      default:
        fail(`markup ${k}`)
    }
  }
  flush()
  if (!group) return parts
  // Parts with no paragraph break between them go together on consecutive lines.
  const grouped: Part[] = []
  for (const part of parts) {
    const prev = grouped.at(-1)
    if (part.joined && prev) {
      if ('lines' in prev) prev.lines.push(part)
      else grouped[grouped.length - 1] = { lines: [prev, part] }
    } else grouped.push(part)
  }
  return grouped
}

/**
 * A line of markup: an `inline` template when it has text (the text reads as it is, the elements go
 * in `${…}`), else `inline(…)` of its parts. A space at an edge stays the markup `space`.
 */
function inlineCode(items: readonly string[]): string {
  // A string with a line break would be a space in a template: those keep the parts form.
  const typo = (x: string) => TEMPLATE_SHORTHANDS.get(x.replace(/^sym(_\d+)?\./, 'sym.'))
  const textual = (x: string) => x.startsWith('"') || SMART_QUOTE.test(x) || typo(x) !== undefined
  if (!items.some(textual) || items.some((x) => x.startsWith('"') && /[\n\r]/.test(JSON.parse(x))))
    return `${c.use('inline')}(${items.map(spaceCode).join(', ')})`
  // A template's own quotes are smart quotes: a straight quote of the text (an escape, `\'`) is a value.
  const text = (s: string) =>
    s
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$\{/g, '\\${')
      .replace(/['"]/g, (q) => (q === "'" ? `\${"'"}` : `\${'"'}`))
      // Runs the template would make dashes or an ellipsis: as a value, the text stays as it is.
      .replace(/-{2,}|\.{3,}/g, (run) => `\${'${run}'}`)
  // Text segments may wrap at their spaces (a line break in the template is a space); values never.
  const segments = items.map((x, i): [string, boolean] => {
    const quote = SMART_QUOTE.exec(x)
    if (quote) return [quote[1] === 'true' ? '"' : "'", true]
    // A shorthand Typst's typography makes in a template's text: written as typed, unless next to
    // another dash, a hyphen or a dot, where the run would read differently (`---` + `---` is no
    // two dashes): there it stays a value.
    const shorthand = typo(x)
    if (shorthand) {
      const touches = (y: string | undefined, end: boolean): boolean => {
        if (y === undefined) return false
        if (typo(y) !== undefined) return true
        const t = y.startsWith('"') ? (JSON.parse(y) as string) : ''
        const ch = end ? t.slice(-1) : t.charAt(0)
        return ch === shorthand.charAt(0)
      }
      if (!touches(items[i - 1], true) && !touches(items[i + 1], false)) return [shorthand, true]
    }
    if (x.startsWith('"')) return [text(JSON.parse(x) as string), true]
    if (x === SPACE) return i === 0 || i === items.length - 1 ? [`\${${c.use('space')}}`, false] : [' ', true]
    if (x === LINE_SPACE) return ['\n', false]
    return [`\${${x}}`, false]
  })
  let body = ''
  let column = 0
  for (const [segment, wraps] of segments) {
    if (!wraps) {
      body += segment
      column = segment.includes('\n') ? segment.length - segment.lastIndexOf('\n') - 1 : column + segment.length
      continue
    }
    for (const [j, word] of segment.split(' ').entries()) {
      if (j > 0) {
        // Not next to CJK, where a line break is not a space.
        const breakable = column > 90 && !CJK.test(body.slice(-1)) && !CJK.test(word.charAt(0))
        body += breakable ? '\n' : ' '
        column = breakable ? 0 : column + 1
      }
      body += word
      column += word.length
    }
  }
  return `${c.use('inline')}\`${body}\``
}

/** Characters between which Typst drops a source line break (CJK scripts and punctuation). */
const CJK = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\u3000-\u303f\uff00-\uffef]/u

/** Adjacent texts, and the spaces between them, as one string: `'NBR 6028:2021 recomenda'`, not three. */
function joinText(par: string[]): string[] {
  const out: string[] = []
  const isStr = (x: string | undefined) => x !== undefined && x.startsWith('"')
  par.forEach((x, i) => {
    const last = out.at(-1)
    if (isStr(x) && isStr(last)) out[out.length - 1] = str(JSON.parse(last!) + JSON.parse(x))
    else if (x === SPACE && isStr(last) && isStr(par[i + 1])) out[out.length - 1] = str(JSON.parse(last!) + ' ')
    else out.push(x)
  })
  return out
}

/** Shorthands an `inline` template's text makes as typed (`--`), by the symbol the converter writes. */
const TEMPLATE_SHORTHANDS = new Map([
  ['sym.dash.en', '--'],
  ['sym.dash.em', '---'],
  ['sym.dots.h', '...'],
])
/** A smart quote in markup, as code: in an `inline` template, the quote itself. */
const SMART_QUOTE = /^smartquote\(\{ double: (true|false) \}\)$/
const SPACE = 'space'
const LINE_SPACE = 'lineSpace'
const isSpace = (x: string) => x === SPACE || x === LINE_SPACE
/** A space token as code: `space` or `lineSpace`. */
const spaceCode = (x: string) =>
  x === LINE_SPACE
    ? c.use('lineSpace')
    : x === SPACE
      ? c.use('space')
      : SMART_QUOTE.test(x)
        ? x.replace('smartquote', c.use('smartquote'))
        : x

/** A number literal, maybe negated or in parentheses: shown in markup, Typst formats it. */
function isNumber(n: Node): boolean {
  if (kind(n) === 'Int' || kind(n) === 'Float') return true
  if (kind(n) === 'Parenthesized') return isNumber(sig(n)[1]!)
  if (kind(n) === 'Unary') return src(sig(n)[0]!) === '-' && isNumber(sig(n)[1]!)
  return false
}

function inlineOf(n: Node, scope: Scope): string {
  const parts = markup(n, scope)
  if (parts.length > 1 || (parts[0] && !('inline' in parts[0]))) fail('block markup in a line')
  const items = parts[0] && 'inline' in parts[0] ? parts[0].inline : []
  return items.map((x) => (x === SPACE ? str(' ') : x === LINE_SPACE ? c.use('lineSpace') : x)).join(', ')
}

function listItem(n: Node, listKind: 'list' | 'enum' | 'terms', scope: Scope): string {
  const s = sig(n)
  const marker = src(s[0]!)
  const termName = listKind === 'terms' ? `[${inlineOf(s[1]!, scope)}]` : null
  const body = markup(s[listKind === 'terms' ? 3 : 1]!, scope, false)
  const first = body[0] && 'inline' in body[0] ? body.shift()! : { inline: [] }
  const text = 'inline' in first ? first.inline : []
  let head = `[${text.map(spaceCode).join(', ')}]`
  // Children that follow without a blank line go together.
  const groups: Part[][] = []
  body.forEach((p, i) => {
    if (i > 0 && p.joined) groups.at(-1)!.push(p)
    else groups.push([p])
  })
  // A first group right after the item's text continues it: the body is `m.lines(text, …)`.
  if (groups[0]?.[0]!.joined) {
    const rest = groups.shift()!.map(partCode)
    head = `${c.use('m')}.lines(${[...(text.length ? [partCode({ inline: text })] : []), ...rest].join(', ')})`
  }
  const children = groups.map((g) =>
    g.length > 1 ? `${c.use('m')}.lines(${g.map(partCode).join(', ')})` : partCode(g[0]!),
  )
  if (termName) return `${c.use('m')}.term(${[termName, head, ...children].join(', ')})`
  const number = /^\d+\.$/.test(marker) ? Number(marker.slice(0, -1)) : null
  if (number !== null) return `${c.use('m')}.numbered(${number}, ${[head, ...children].join(', ')})`
  return `${c.use('m')}.item(${[head, ...children].join(', ')})`
}

function partCode(p: Part): string {
  if ('lines' in p) return `${c.use('m')}.lines(${p.lines.map(partCode).join(', ')})`
  // A paragraph of plain text is just the string.
  if ('inline' in p && p.inline.length === 1 && p.inline[0]!.startsWith('"')) return p.inline[0]!
  if ('inline' in p) return inlineCode(p.inline)
  if ('block' in p) return p.block

  return `${c.use('m')}.${p.list}(${p.tight ? '' : '{ tight: false }, '}${p.items.join(', ')})`
}

/** Markup as a content value: inline when it is one paragraph, else block content. */
function content(n: Node, scope: Scope): string {
  const items = kids(n)
  // Spaces at the edges of a content block are content (`box[ x ]`).
  // Spaces at the edges of a content block are content (`box[ x ]`, a bookmark title), newlines included.
  const lead = items[0] && kind(items[0]) === 'Space'
  const trail = items.length > 1 && kind(items.at(-1)!) === 'Space'
  // A paragraph break at an edge is content too: it makes what follows a paragraph.
  const edgeBreak =
    items.some((x) => kind(x) === 'Parbreak') &&
    (kind(items[0] ?? ['', '']) === 'Parbreak' || kind(items.at(-1) ?? ['', '']) === 'Parbreak')
  if (edgeBreak) {
    const pb = `${c.use('parbreak')}()`
    const parts = markup(n, scope).map(partCode)
    const before = kind(items[0]!) === 'Parbreak' ? [pb] : []
    const after = kind(items.at(-1)!) === 'Parbreak' ? [pb] : []
    if (!parts.length) return `${c.use('inline')}(${[...before, ...after].join(', ')})`
    return `${c.use('blocks')}(${[...before, ...parts, ...after].join(', ')})`
  }
  const parts = markup(n, scope)
  // Empty content is `inline()`: `[]` in JS is an empty array where any value goes.
  if (parts.length === 0) return lead ? `${c.use('inline')}(${c.use('space')})` : `${c.use('inline')}()`
  if (parts.length === 1 && 'inline' in parts[0]!) {
    return inlineCode([...(lead ? [SPACE] : []), ...parts[0].inline, ...(trail ? [SPACE] : [])])
  }
  return `${c.use('blocks')}(${parts.map(partCode).join(', ')})`
}

// ---------------------------------------------------------------------------
// Driver.

interface Result {
  fallbacks?: string[]
  name: string
  status: 'api' | 'snippets' | 'unsupported'
  escapes: number
  reason?: string
}

const prettierConfig = JSON.parse(readFileSync(new URL('../.prettierrc.json', import.meta.url), 'utf8')) as object
const outDir = new URL(`../test/${set}/converted/`, import.meta.url)
rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })
const results: Result[] = []

for (const line of readFileSync(input, 'utf8').split('\n')) {
  if (!line) continue
  const { file, tree } = JSON.parse(line) as { file: string; tree: Node }
  const name = file
    .split('/')
    .at(-1)!
    .replace(/\.typ$/, '')
  c = new Case()
  c.tree = tree
  if (set === 'universe') c.project = new URL(`../.cache/universe/${name}`, import.meta.url).pathname
  DEFINED.clear()
  VAR_TYPES.clear()
  try {
    const scope: Scope = { vars: new Map(), ctx: null, rawOk: true }
    // The names that imports bring are declared first; then each import lists them.
    const lists = (code: string) =>
      c.importStmts.reduce(
        (acc, { token, names }) =>
          acc.replace(
            token,
            `[${names
              .map((n) =>
                typeof n === 'string'
                  ? c.imported.get(n)!.v
                  : `{ item: ${str(n.original)}, as: ${c.imported.get(n.name)!.v} }`,
              )
              .join(', ')}]`,
          ),
        code,
      )
    // A smart quote outside an `inline` template is still the marker: `smartquote(…)`, imported.
    const quotes = (code: string) =>
      code.replace(/(?<![\w.$])smartquote\(\{ double: (true|false) \}\)/g, (m) =>
        m.replace('smartquote', c.use('smartquote')),
      )
    const parts = markup(tree, scope).map(partCode).map(lists).map(quotes)
    const decls = [...c.moduleDecls, ...importedDecls(), ...c.decls].map(lists).map(quotes)
    const imports = [...c.imports].sort()
    const body = [
      `// Converted from test/${set}/corpus/${name}.typ by scripts/convert-suite.ts — do not edit.`,
      '/* eslint-disable */',
      `import { ${imports.join(', ')} } from '../../../src/index.ts'`,
      '',
      'export default () => {',
      ...decls.map((d) => `  ${d}`),
      `  return doc(${parts.join(',\n    ')})`,
      '}',
      '',
    ].join('\n')
    let formatted: string
    try {
      formatted = await format(body, { ...prettierConfig, parser: 'typescript' })
    } catch (e) {
      // Invalid TypeScript is a converter bug; keep the case visible in the report.
      if (process.env.DUMP) writeFileSync(`${process.env.DUMP}/${name}.ts`, body)
      throw new Unsupported(`converter produced invalid TypeScript: ${String(e).split('\n')[0]!.slice(0, 80)}`)
    }
    writeFileSync(new URL(`${name}.ts`, outDir), formatted)
    results.push({ name, status: c.escapes ? 'snippets' : 'api', escapes: c.escapes, fallbacks: c.fallbacks })
  } catch (e) {
    if (!(e instanceof Unsupported)) throw e
    results.push({ name, status: 'unsupported', escapes: 0, reason: e.message })
  }
}

writeFileSync(new URL('report.json', outDir), JSON.stringify(results, null, 1) + '\n')
const count = (s: Result['status']) => results.filter((r) => r.status === s).length
console.log(
  `converted ${results.length} cases: ${count('api')} with the API alone, ${count('snippets')} with snippets, ${count('unsupported')} unsupported`,
)
const reasons = new Map<string, number>()
for (const r of results) if (r.reason) reasons.set(r.reason, (reasons.get(r.reason) ?? 0) + 1)
const why = new Map<string, number>()
for (const r of results) for (const f of r.fallbacks ?? []) why.set(f, (why.get(f) ?? 0) + 1)
console.log(
  'snippets needed for:\n' +
    [...why]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 25)
      .map(([r, k]) => `  ${k} ${r}`)
      .join('\n'),
)
console.log(
  [...reasons]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([r, n]) => `  ${n} ${r}`)
    .join('\n'),
)
