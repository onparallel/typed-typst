# Security

typed-typst prints Typst source from TypeScript. It compiles nothing, except through the optional
`typed-typst/node` helpers (`check`, `checkSource`), which run the `typst` binary. This page says
what the library guarantees, what it leaves to Typst and to you, and how to report a problem.

Supported versions: the latest release. The bindings target one Typst version (`TYPST_VERSION`);
`checkTypstVersion()` fails on another.

## What the library guarantees

**Data never becomes code.** A string, number or other value passed to the API prints as data for
the position it lands in:

- in markup, as escaped text: no `#`, `*`, `_`, `` ` ``, `$`, `=`, `-`, `+`, `/`, `@`, `<label>`,
  `~`, smart quotes, shorthands (`--`, `...`, `-?`, a minus before a number), enum markers (`1.`),
  comments or links take effect, also at the start of a line, after spaces or inside a term. In
  `prose(…)` and in an `inline` template's own text, quotes, `--`, `---` and `...` are left to
  Typst's typography, which makes them characters, never elements;
- in code, as a string, number or other literal; a dictionary's keys as identifiers or as strings,
  and the keys of named arguments as ASCII identifiers (others throw);
- names the document binds or calls (`define`, `let_`, parameters, named arguments, fields,
  labels) are checked when they are made and again when they print; an invalid one throws;
- a module (`external`, `define(…).external`) is one the library made, never a `{ name }` object.
- a name the document does not bind is the standard library's: `external('eval')` or
  `define('image')….external()` would let a caller pass any value to `eval` or `image`, so the
  functions that read files or run code (`eval`, `plugin`, `read`, `image`, `json`, `csv`, `yaml`,
  `toml`, `xml`, `cbor`, `bibliography`, `cite`, `raw`, `pdf`) print only where the document has
  bound that name before, at its top level (an import or a `let_`; in its own value, `let eval =
eval`, and in a block, a function or a snippet, the name is still the standard library's);
- `call(f, …)` calls a name (a `let_`, an `external`, a parameter) or a field of one, never a
  function value computed in Typst (`f.with(…)`, `it.func()`, a field of a parameter such as
  `it.kind`), and an `external` of a function the document defines throws;
- the variables of an `unsafeRaw` snippet cannot be names of Typst's (`text`, or `pi` in an
  equation): an object typed `{ name }` can hold more keys at run time;

`eval` and `plugin` are left out of the bindings: no API call runs a string as Typst code or loads
WebAssembly.

**Data does not choose which file the document reads.** Where Typst reads a file, the library
accepts only a file it knows, at run time as well as in the types:

- `path('literal')`, and `unsafePath(…)` for a path the program or a trusted template computes;
- bytes a function makes (`bytes(…)`, `read(…, { encoding: null })`);
- a binding of those (`let_('logo', path('logo.png'))`, a `T.path` or `T.bytes` parameter of a
  `define`);
- a name the parameter takes (`bibliography(style: 'apa')`, a `T.oneOf` parameter), `none`, `auto`,
  and arrays of all these.

Anything else throws: a string, and any value computed in Typst (`data(record).at('logo')`, a
`T.any` parameter, `sys.inputs`, `a + b`), which could hold any string of data. The parameters are
`image` (`source`, `icc`), `read`, `json`, `csv`, `yaml`, `toml`, `xml`, `cbor`, `bibliography`
(`sources`, `style`), `cite` (`style`), `raw` (`syntaxes`, `theme`) and `pdf.attach` (`path`). A
function that takes a file by position cannot go as a value anywhere (`.map(json)`, an argument, a
`let_`, `data()`), where Typst or a template would call it with values it computes, except as a
selector or a figure kind: the readers of the standard library, a `.with(…)` of one that leaves its
file out (`csv.with()`), and a `define` with a `T.path`, `T.bytes` or `T.oneOf` parameter by
position. A spread cannot fill such a parameter, and a name bound to a file
(`let_('notes', path(…))`, a `T.path` parameter) cannot be bound to anything else in the document,
which Typst would read instead. `includeFile` and `importFile` take a string and
`importPackage` a spec of the form `@namespace/name:x.y.z`. (`document(path: …)` names an output
file of the bundle target; nothing is read.)

`path()`, `includeFile()` and `importFile()` take a string literal type: `string`, and template
literal types such as `` `uploads/${string}` ``, do not compile, nor does `as any`. At run time a
literal cannot be told from a computed string, so that part of the check is in the types and in the
lint rule `typed-typst/literal-path`: `as never`, `Reflect.apply` or plain JavaScript gets past the
types, and the lint rule catches what it can see. The rest of the list above holds at run time.

**Lint rules.** `typed-typst/eslint` is an ESLint plugin with two rules: `unsafe-raw` allows
`unsafeRaw` only as a tagged template written in the source (no alias, renamed or namespace
import, name written as a string, `.call`, `Reflect.apply`, cast, `${…}`, or spread or computed
variable names; a namespace of the library is read only as `tt.name`), and `literal-path` makes
every reference to `path()`, `includeFile()` and `importFile()` a direct call with a literal. `unsafe-raw` also reports the name `unsafeRaw` kept in a variable (`const k = 'unsafeRaw'`), and
`literal-path` a type argument (`path<'a.png'>(value)`, which lets a value of type `any` pass as the
literal). They follow names, not values: `require('typed-typst')` destructured, a dynamic `import()`
of a name the rule cannot read, a module of yours that re-exports the library (`export * from
'typed-typst'`, then `ns[key]`), a name built from parts (`'unsafe' + 'Raw'`), or a value that leaves
the module other than by its name, is not seen. Enable both, for every script extension:

```js
import typedTypst from 'typed-typst/eslint'
export default [
  {
    plugins: { 'typed-typst': typedTypst },
    rules: { 'typed-typst/unsafe-raw': 'error', 'typed-typst/literal-path': 'error' },
  },
]
```

**Values fail closed.** NaN and infinities, bigints past Typst's integers, lone surrogates, holes in
arrays, cycles, and code nested deeper than 250 levels throw instead of printing. The library's
tables and nodes read only their own fields, so a polluted `Object.prototype` adds no argument or
code; an index past the end of an array is not covered. `data()` takes JSON-like values (and
functions and types of the library); a `number` past 2^53 prints as a float, as in JavaScript.

**Printing takes linear time** in the size of the document, also for text in markup, `prose(…)` and
lines of many parts (a test prints a megabyte).

## What the library does not guarantee

- **`unsafeRaw`.** Its text is Typst code you wrote. Values passed as variables stay data, but the
  snippet decides what to do with them: `` unsafeRaw.code({ f })`read(f)` `` reads the file `f`
  names. Review every snippet that gets untrusted values. Names a snippet binds (`#let text = …`)
  are not known to the printer, which then cannot tell the document's `text` from the library's.
  A forged template array passes the run-time check; the lint rule is what keeps the text literal.
- **`unsafePath`** lets a computed value choose a file. Grep for it, and for `as never` and
  `as any`, when you audit.
- **Data that chooses among arguments.** A plain object given first is taken as named arguments
  when its keys are parameters (`text(obj, …)`, a `define` with `..rest`, `arguments_`, `call(f,
obj)`, a define's `.with(obj)`): data can pick which of the real parameters it sets, while each
  value stays data and an argument for `..rest` cannot name a parameter. Pass objects from outside
  through `data()`, which is always a value.
- **Function values Typst computes.** `call` refuses the ones it can see, but other values can
  still be one: an element's `func()` (`image` for an image), a parameter of a closure or a
  `define` that Typst passes a function, or a binding of a value only Typst knows. If that function
  reads files and something calls it with data (`data(files).map(it.func())`, a template), it reads
  what the data names. That takes code written to do it; do not hand such values to data.
- **Names the document binds.** A closure's parameter (`it`, `x`…) or a `define` parameter can
  shadow a binding of the document with the same name (`let_('it', …)`); choose other names.
- **Bytes can name files.** An SVG passed as bytes (`image({ format: 'svg' }, bytes(upload))`) can
  link images with `<image href="…">`; Typst loads them from the project root and embeds them.
- **Packages and templates** (`importPackage`, `importFile`, `external`) run with everything Typst
  allows: they can read any file under the root, and a package function may treat a string you
  pass as a path. The library types what it passes, not what the package does with it. `@preview`
  packages are downloaded on first use.
- **Resource use in Typst.** A valid document can take unbounded time and memory: large data, a
  loop in `unsafeRaw` or a package, and small values that ask for a lot, such as
  `numbering('I', 1e13)`, `table({ columns: 1e5 })`, `table.cell({ rowspan: 1e5 })`,
  `m.heading(1e8, …)` or `times(content, 1e5)`. Bound such numbers when data chooses them. Typst
  stops only a `while` loop it considers infinite, and stops parsing below 256 levels of nesting.
- **Strings that Typst rejects.** Some arguments fail the whole compilation when Typst rejects the
  value: the library checks the cheap ones (an empty text selector or numbering pattern, a matrix
  delimiter of one character, a language or region code), not all (a numbering pattern without a
  counting symbol, a regular expression Rust does not accept, `datetime.display` patterns, an accent
  of more than one character). Validate such strings from data, or let `check()` fail.
- **Typst itself.** Fonts, images, PDFs, SVG, bibliographies and data formats are parsed by the
  Typst binary; report its bugs to the Typst project. Typst can panic on some rare text, also data
  shown as text; `check()` reports it as a failed compilation.
- **Output.** Links (`link(url)`) are written as given: validate URLs from untrusted sources (Typst
  rejects an empty one and one of 8 kB or more).
- **Diagnostics.** Typst repeats values of the document in its messages (`float(s)`, a font name),
  newlines included, so data can shape what `check()` parses as diagnostics: a forged error, file
  or hint. Only `ok` is reliable.
- **Code that runs in your process.** A `Proxy` built to answer every property can pass as a node
  of the library; that takes running code, not passing data.
- **Unicode versions.** Node 24 knows Unicode 17, Typst 0.15.1 Unicode 16. So a label attached in
  markup (`labelled(x, label(name))`) is ASCII (another throws), as are the keys of named
  arguments; in code a label prints as `label("…")`, and a dictionary's keys print as strings.
  Names written in the program (`let_`, `define`) take any identifier. A data space next to a
  `space` node is kept; a line break in data shows as one (`\n` is a forced line break), and so do
  `\u{2028}` and `\r` in `prose(…)`, which makes only `\n` and `\r\n` spaces.

## Rendering untrusted data

Typst confines file access to `--root`: a path that would leave it is an error. It does follow
symbolic links, also ones that point outside the root.

- Use a root with only the files the document needs, written by you, without symlinks you did not
  create, and never one users can write to. `check()` defaults to a new empty directory.
- Pass fonts with `fontPaths` and `ignoreSystemFonts: true`, so documents see only your fonts.
- Pin packages: set both `packageCachePath` and `packagePath` to directories you control (Typst
  looks for `@preview` packages in the local package path first), and block the network at the
  process or container level, so that a document cannot fetch a package (Typst 0.15 has no
  offline flag).
- Limit time and memory: `check()` takes `timeout` and `signal` and then kills Typst; cap memory
  with the OS (cgroups, a container), and the size of input data before building the document.
- Run Typst as an unprivileged user in a sandbox when inputs come from people you do not trust.
- `check()` passes your environment on, and variables change what Typst reads: `TYPST_FONT_PATHS`,
  `TYPST_IGNORE_SYSTEM_FONTS`, `TYPST_IGNORE_EMBEDDED_FONTS`, `TYPST_PACKAGE_PATH`,
  `TYPST_PACKAGE_CACHE_PATH`, `TYPST_FEATURES`, `TYPST_CERT`, `SOURCE_DATE_EPOCH`, `HOME` and
  `XDG_*` (the default package and font directories) and the proxy variables. (`TYPST_ROOT` does
  not apply: `check()` always passes `--root`.) A `fontPaths` entry with `:` is split by Typst.
- Diagnostics can contain absolute paths and computed values: do not show them to end users as
  they are.

## `typed-typst/node`

- `check` and `checkSource` run Typst with an argument list, never a shell, and pass options as
  `--flag=value`, so a value that starts with `-` stays a value; input names with `=` and input
  values that are not strings throw. The source goes in on stdin; the PDF goes to a private
  temporary directory (`mkdtemp`) that is removed afterwards.
- Typst runs in a process group of its own. On `timeout`, on `signal` and when your process exits,
  the whole group is killed (also what a wrapper given as `bin` started) and the directory removed;
  a process killed by a signal (SIGKILL) cannot clean up. `timeout` is a whole number of
  milliseconds; stderr is kept up to 64 MB.
- `checkSource(source)` compiles any Typst source: pass it only what `render` printed or what you
  wrote.
- `bin`, `root`, `fontPaths`, `packageCachePath` and `inputs` are configuration, not input: `bin`
  runs that program.

## How this was reviewed

The project is written by an AI coding agent (see the README), and its security was reviewed by
agents too. Each finding was reproduced against Typst 0.15.1 and fixed or listed above, and is kept
as a test.

## Reporting a vulnerability

Do not open a public issue. Report it through a private security advisory on the
[GitHub repository](https://github.com/onparallel/typed-typst/security/advisories/new) (Security →
Report a vulnerability). Include the version, a minimal reproducer (the
TypeScript and the printed Typst source) and what an attacker controls. Problems in Typst itself go
to the Typst project.
