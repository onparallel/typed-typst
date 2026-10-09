# Changelog

Versions name the Typst version of the bindings: Typst `a.b.c` is
`a.b.(c × 100 + r)`, where `r` counts the releases for that Typst version
(see the README). Each entry says whether it changes the library's API.

## [0.15.101](https://github.com/onparallel/typed-typst/compare/v0.15.100...v0.15.101) (2026-10-09)

No changes to the API. The first release published from CI, with npm provenance; the GitHub
Actions and pnpm are on their latest versions.

## [0.15.100](https://github.com/onparallel/typed-typst/releases/tag/v0.15.100) (2026-10-09)

The first release, for Typst 0.15.1: the bindings of Typst 0.15.1's standard
library, the markup and scripting API, `unsafeRaw`, `@onparallel/typed-typst/node` (`check`,
`checkTypstVersion`) and the ESLint plugin `@onparallel/typed-typst/eslint`.

Changes to the API since the security review (docs/design.md §11, SECURITY.md):

- `@onparallel/typed-typst/eslint` exports an ESLint plugin with the rules `unsafe-raw` and `literal-path`;
  `unsafeRawRules` is removed.
- `path`, `includeFile`, `importFile`, `importPackage` and the names of `define`, `let_` and
  `external` no longer accept template literal types (`` `uploads/${string}` ``).
- A module passed to `external(name, module)`, `define(…).external(module)` or an import must come
  from `external` or `define`: a `{ name }` object is rejected.
- `data()` rejects values that are not JSON-like (`Date`, `Map`, class instances).
- A string inside an array or `data()` at a file parameter (`bibliography`, `raw.syntaxes`) throws.
- `check()` and `checkSource()` take `timeout` and `signal`.
- A label that is no label syntax (`label('.x')`) cannot be attached in markup.
- A file parameter (`image`, `read`, `json`, `bibliography`, `raw.theme`…) takes only `path(…)`,
  `unsafePath(…)`, bytes, bindings of those and its names: a value computed in Typst (a method
  result, a `T.any` parameter, `sys.inputs`) throws. `unsafePath` also takes an expression.
  `T.path` and `T.bytes` are new parameter types for `define`. A file reader cannot go as a value
  (`.map(json)`) except as a selector or a figure kind.
- An argument for a `define`'s `..rest` cannot name one of its parameters; two arguments that are
  the same name in Typst throw.
- `unsafeRaw.markup` with variables prints in a content block of its own; a variable's value
  cannot name another variable of the snippet.
- `labelled` on blank content attaches the label to a block of its own.
- An empty object is a dictionary where a function takes no named arguments (`metadata({})`); list
  options other than a boolean `tight` throw.
- The ESLint rules are stricter (names written as strings, namespaces read only as `tt.name`,
  every reference to `path`, `includeFile` and `importFile`).
- `check()` takes `packagePath`; `timeout` must be a whole number of milliseconds; input values
  must be strings.
- `call(f, …)` calls a function value only Typst knows; `let_([…names], value)` destructures;
  `div` and `neg` complete the arithmetic; a define's `.with` takes positional arguments.
- An `inline` template's own text gets Typst's typography, as typed: smart quotes (`don’t`), `--`
  and `---` dashes, `...` an ellipsis; values are shown exactly. Templates that relied on straight
  quotes or on `--` print the typographic forms now. `prose(value)` gives data that is prose the
  same typography (`prose.paragraphs` also makes paragraphs on blank lines).
- `external('image')`, `define('eval')….external()` and other standard functions that read files or
  run code can only be names the document imports; rendering throws otherwise.
- Units (`pt(1)`), alignment and direction constants (`left`, `ltr`) and the results of `add` and
  `minus` have the methods of their type (`left.inv()`, `add(pt(6), em(10)).toAbsolute()`).
- A function that reads a file it is given goes nowhere as a value (an argument, `.map`, `let_`,
  `data()`, a `define` or template parameter), except as a selector or a figure kind: the standard
  readers, a `.with(…)` that leaves the file out (`csv.with()`), a `define` with a `T.path`,
  `T.bytes` or `T.oneOf` parameter by position. A define's default may
  still be one (`logo: image`).
- `call(f, …)` calls only a name or a field of one: not `f.with(…)`, `it.func()` or a field of a
  parameter (`it.kind`). An `external` of a function the document defines throws.
- A standard function that reads files counts as the document's only once an import or `let_` at
  its top level has bound it, before the use (`let eval = eval` throws).
- A name bound to a file (`let_('x', path(…))`, a `T.path` parameter) cannot be bound to another
  value anywhere in the document.
- `unsafeRaw` variables cannot be names of Typst's (`text`; in an equation also `pi`, `frac`).
- A label attached in markup is ASCII, and so are the keys of named arguments (`call(f, obj)`, a
  `..rest`, `arguments_`).
- An import lists what it brings or names its module: `importFile('x.typ', [])` throws.
- `labelled(text, …)` puts the text in a content block, so the label goes on all of it; a heading
  that ends with a label prints its body in a content block, so the label stays on its element.
- `prose(value)` keeps the spaces at its edges (only line breaks and the spaces around them become
  a space); a `lineSpace` in a heading or a term (CJK prose) prints in a content block instead of
  throwing.
- An empty text selector (`show('')`), an empty numbering pattern, a matrix delimiter that is not
  one character and a language or region code of the wrong length throw.
- Code nests at most 250 levels, content blocks included (Typst's parser stops before 256).
