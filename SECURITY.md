# Security

typed-typst prints Typst source from TypeScript. It compiles nothing, except through the optional
`@onparallel/typed-typst/node` helper `typst()`, which runs the `typst` binary. This page says
what the library guarantees, what it leaves to Typst and to you, and how to report a problem.

Supported versions: the latest release. The bindings target one Typst version (`TYPST_VERSION`);
`typst().checkVersion()` fails on another.

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
- the variables of an `unsafeRaw` snippet cannot be names of Typst's (`text`, or `pi` in
  `unsafeRaw.math`): an object typed `{ name }` can hold more keys at run time;

`eval` and `plugin` are left out of the bindings, also as a name the document does not bind
(`external('eval')` throws): no API call runs a string as Typst code or loads WebAssembly.

**Files: Typst's `--root` confines what a document reads, not the library.** A value of Typst
can become a path in many ways (a field, a function value, `.with`, a package), so the library does
not follow values to decide which file a document reads. It has two checks against mistakes, not a
sandbox:

- a parameter that reads a file (`image`, `read`, `json`, `csv`, `yaml`, `toml`, `xml`, `cbor`,
  `bibliography`, `cite` and `raw` styles and themes, `pdf.attach`) does not take a JavaScript
  string, in the types and at run time (`image(user.photo)` throws), except a name it takes
  (`bibliography({ style: 'apa' })`). It takes `path('literal')`, `unsafePath(…)` for a path the
  program computes, bytes, or any value of Typst, which is the author's choice;
- `path()`, `includeFile()` and `importFile()` take a string literal type: `string`, and template
  literal types such as `` `uploads/${string}` ``, do not compile. At run time a
  literal cannot be told from a computed string, so this part is only in the types: a cast
  (`as never`, `as any`), `Reflect.apply` or plain JavaScript gets past them.

So `unsafePath`, and Typst code that builds a path from data (`image("logos/" + name)`, a function
value such as `.map(json)` or `it.func()`, `unsafeRaw`), choose files as the author wrote them.
Render untrusted data with a minimal root (see "Rendering untrusted data"). `importPackage` takes a
spec of the form `@namespace/name:x.y.z`. (`document(path: …)` names an output file of the bundle
target; nothing is read.)

**Values fail closed.** NaN and infinities, bigints past Typst's integers, lone surrogates, holes in
arrays that become Typst values, cycles, and code nested deeper than 250 levels throw instead of
printing (in markup, a hole is skipped, as `undefined` is). The library
reads only the own properties of its tables and nodes, so a polluted
`Object.prototype` (for example from a bug in another dependency that merges data with a
`__proto__` key) adds no argument or code; an index past the end of an array is not covered.
`data()` takes JSON-like values (and
functions and types of the library); a `number` past 2^53 prints as a float, as in JavaScript.

**Printing takes linear time** in the size of the document, also for text in markup, `prose(…)` and
lines of many parts (a test prints a megabyte).

## What the library does not guarantee

- **`unsafeRaw`.** Its text is Typst code you wrote. Values passed as variables stay data, but the
  snippet decides what to do with them: `` unsafeRaw.code({ f })`read(f)` `` reads the file `f`
  names. Review every snippet that gets untrusted values. Names a snippet binds (`#let text = …`)
  are not known to the printer, which then cannot tell the document's `text` from the library's.
  The types keep the text a literal; a forged template array from untyped code can pass the run-time
  check.
- **Which file a document reads.** `unsafePath`, and Typst code that turns data into a path (string
  concatenation, function values, `.with`, a package that takes a string), read the file the value
  names, anywhere under the root. Grep for `unsafePath`, `as never` and `as any` when you audit, and
  confine the root.
- **Data that chooses among arguments.** A plain object given first is taken as named arguments
  when its keys are parameters (`text(obj, …)`, a `define` with `..rest`, `arguments_`, `call(f,
obj)`, a define's `.with(obj)`): data can pick which of the real parameters it sets, while each
  value stays data and an argument for `..rest` cannot name a parameter. Pass objects from outside
  through `data()`, which is always a value.
- **Names the document binds.** The `it` of a callback with one parameter, or a `define`
  parameter, can shadow a binding of the document with the same name (`let_('it', …)`); choose
  other names. The other names the library gives callback parameters (`it2`, `it3`… when nested,
  `_1`, `_2`… for more parameters, `.._0` for a rest parameter) are rejected by `let_` and `define`.
- **Bytes can name files.** An SVG passed as bytes (`image({ format: 'svg' }, bytes(upload))`) can
  link images with `<image href="…">`; Typst loads them from the project root and embeds them.
- **Packages and templates** (`importPackage`, `importFile`, `external`) run with everything Typst
  allows: they can read any file under the root, and a package function may treat a string you
  pass as a path. The library types what it passes, not what the package does with it. `@preview`
  packages are downloaded on first use.
- **Resource use in Typst.** A valid document can take unbounded time and memory: large data, a
  loop in `unsafeRaw` or a package, and small values that ask for a lot, such as
  `numbering('I', 1e13)`, `table({ columns: 1e5 })`, `table.cell({ rowspan: 1e5 })` or
  `times(content, 1e5)`. Bound such numbers when data chooses them. Typst
  stops only a `while` loop it considers infinite, and stops parsing below 256 levels of nesting.
- **Strings that Typst rejects.** Some arguments fail the whole compilation when Typst rejects the
  value: an empty text selector or numbering pattern, a language or region code of the wrong length,
  a regular expression Rust does not accept, a `datetime.display` pattern. The library prints them as
  data and does not check them. Validate such strings from data, or let `compile()` fail.
- **Typst itself.** Fonts, images, PDFs, SVG, bibliographies and data formats are parsed by the
  Typst binary; report its bugs to the Typst project. Typst can panic on some rare text, also data
  shown as text; `compile()` reports it as a failed compilation.
- **Output.** Links (`link(url)`) are written as given: validate URLs from untrusted sources (Typst
  rejects an empty one and one of 8 kB or more).
- **Diagnostics.** Typst repeats values of the document in its messages (`float(s)`, a font name),
  newlines included, so data can shape what `compile()` and `eval()` parse as diagnostics: a forged error, file
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

- This is what keeps data from reading other files: the library does not (see "Files" above). Give
  each compilation a new root with only that document's files (the template and its assets), copied
  there for the job: never a checkout of your repository, a directory with secrets (`.env`) or other
  customers' files, symlinks you did not create, or a directory users can write to. `typst()`
  defaults to a new empty directory.
- Pass fonts with `fontPaths` and `ignoreSystemFonts: true`, so documents see only your fonts.
- Pin packages: set both `packageCachePath` and `packagePath` to directories you control (Typst
  looks for `@preview` packages in the local package path first), and block the network at the
  process or container level, so that a document cannot fetch a package (Typst 0.15 has no
  offline flag).
- Limit time and memory: `typst()` takes `timeout` and `signal` and then kills Typst; cap memory
  with the OS (cgroups, a container), and the size of input data before building the document.
- Run Typst as an unprivileged user in a sandbox when inputs come from people you do not trust.
- `typst()` passes your environment on, and variables change what Typst reads: `TYPST_FONT_PATHS`,
  `TYPST_IGNORE_SYSTEM_FONTS`, `TYPST_IGNORE_EMBEDDED_FONTS`, `TYPST_PACKAGE_PATH`,
  `TYPST_PACKAGE_CACHE_PATH`, `TYPST_FEATURES`, `TYPST_CERT`, `SOURCE_DATE_EPOCH`, `HOME` and
  `XDG_*` (the default package and font directories) and the proxy variables. (`TYPST_ROOT` does
  not apply: `typst()` always passes `--root`.) A `fontPaths` entry with `:` is split by Typst.
- Diagnostics can contain absolute paths and computed values: do not show them to end users as
  they are.

## `@onparallel/typed-typst/node`

- The commands of `typst()` run Typst with an argument list, never a shell, and pass options as
  `--flag=value`, so a value that starts with `-` stays a value; input names with `=` and input
  values that are not strings throw. The source goes in on stdin; the PDF goes to a private
  temporary directory (`mkdtemp`) that is removed afterwards.
- Typst runs in a process group of its own. On `timeout`, on `signal` and when your process exits,
  the whole group is killed (also what a wrapper given as `bin` started) and the directory removed;
  a process killed by a signal (SIGKILL) cannot clean up. `timeout` is a whole number of
  milliseconds; stdout and stderr are kept up to 64 MB each. This is tested on Linux and macOS; on Windows, where
  there are no process groups, only the process a command started is killed.
- `{ source }` compiles any Typst source: pass only what `render` printed or what you wrote. The
  expression of `eval` prints as code, like any value: a string from data stays a string, and
  Typst code there comes from `unsafeRaw`.
- `bin`, `root`, `fontPaths`, `packageCachePath` and `inputs` are configuration, not input: `bin`
  runs that program.

## Reporting a vulnerability

Do not open a public issue. Report it through a private security advisory on the
[GitHub repository](https://github.com/onparallel/typed-typst/security/advisories/new) (Security →
Report a vulnerability). Include the version, a minimal reproducer (the
TypeScript and the printed Typst source) and what an attacker controls. Problems in Typst itself go
to the Typst project.
