# Design: a typed generator of Typst source (Typst 0.15.1)

Status: implemented. §0–§10 are the original design; §11 records what changed while building it, in
order, so where they disagree §11 wins. Source of the bindings: a Rust
reflection dump (`tools/reflect/`) plus a file of manual adjustments (`spec/overlay.ts`).

## 0. Principles

1. **The user writes no Typst syntax.** No `#`, `[`, `]`, `;` or `<label>`. The printer chooses the
   syntax from the node's position in the tree.
2. **A JS `string` is always data.** In code position it prints as an escaped `"…"` literal. In
   markup it prints as escaped text. It is never interpreted as code.
3. **Every Typst value has a TS type.** `size: '12pt'` does not compile, because `size` expects
   `Expr<'length'>`, not `string`. The only positions where a `string` compiles are those Typst types
   as `str`, `content` or a union of literals (`'normal' | 'italic'`). In all of them the result is a
   string literal, so it cannot inject anything.
4. **A single escape hatch, visible and easy to grep:** `unsafeRaw`.

## 1. Node model

### 1.1 Internal tree (not public)

```ts
type CodeNode =
  | { k: 'str'; v: string }                       // "…"
  | { k: 'int'; v: number } | { k: 'float'; v: number } | { k: 'bool'; v: boolean }
  | { k: 'none' } | { k: 'auto' }
  | { k: 'unit'; v: number; unit: 'pt' | 'mm' | 'cm' | 'in' | 'em' | '%' | 'fr' | 'deg' | 'rad' }
  | { k: 'ident'; name: string }                  // variables of let/define/closures
  | { k: 'path'; path: readonly string[] }        // table.cell, heading.where…
  | { k: 'call'; callee: CodeNode; pos: CodeNode[]; named: [string, CodeNode][]; trailing: MarkupNode[][] }
  | { k: 'field'; target: CodeNode; name: string } // it.body
  | { k: 'binop'; op: '+' | '-' | '*' | '/'; l: CodeNode; r: CodeNode }
  | { k: 'array'; items: CodeNode[] } | { k: 'dict'; entries: [string, CodeNode][] }
  | { k: 'label'; name: string }                  // <name> or label("…")
  | { k: 'closure'; params: string[]; body: CodeNode }
  | { k: 'contentBlock'; body: MarkupNode[] }     // [ … ]
  | { k: 'context'; body: CodeNode }
  | { k: 'raw'; src: string }                     // unsafeRaw.code only

type MarkupNode =
  | { k: 'text'; v: string }                      // escaped when printed
  | { k: 'embed'; expr: CodeNode }                // #expr (+ ';' when needed)
  | { k: 'heading'; level: number; body: MarkupNode[] }   // = …  (block)
  | { k: 'list' | 'enum'; items: ListItem[] }              // - … / + …  (block)
  | { k: 'labelled'; node: MarkupNode; label: string }     // node <label>
  | { k: 'ref'; label: string }                   // @label
  | { k: 'parbreak' }
  | { k: 'stmt'; stmt: Stmt }                     // #set/#show/#let/#import (block)
  | { k: 'rawMarkup'; src: string }               // unsafeRaw.markup only

type Stmt =
  | { k: 'set'; target: CodeNode; named: [string, CodeNode][] }
  | { k: 'show'; selector: CodeNode | null; replacement: CodeNode | Stmt }
  | { k: 'let'; name: string; params?: Param[]; value: CodeNode }
  | { k: 'import'; source: string; items: string[] }
```

The implemented tree (`src/core.ts`) differs in detail; the ideas are the same.

### 1.2 Typed public surface

```ts
declare const kind: unique symbol
/** A code expression whose Typst type is T (a union of type names). */
interface Expr<T extends TypeName> { readonly [kind]: T }

type Length   = Expr<'length'>
type Ratio    = Expr<'ratio'>
type Relative = Expr<'length' | 'ratio' | 'relative'>   // in Typst, length and ratio convert to relative
type Content  = Expr<'content'>

/** Markup that can be printed inside a line. */
interface Inline { readonly [flow]: 'inline' }
/** Markup that needs its own lines (`=` headings, lists, paragraphs, statements). */
interface Block  { readonly [flow]: 'block' }
interface Stmt   { readonly [flow]: 'stmt' }
```

The covariance of the brand makes unions work naturally: `Expr<'length'>` is assignable to
`Relative`, and `Expr<'content'>` is also `Inline`, because it prints as `#call(…)`.

### 1.3 Values built from typed input

| Typst | API | Prints |
|---|---|---|
| length | `pt(12)`, `mm(2)`, `cm()`, `inches()`, `em(1)` | `12pt`, `2mm`, `1em` |
| ratio | `pct(50)` | `50%` |
| relative | `add(mm(2), pct(10))` | `2mm + 10%` |
| fraction | `fr(1)` | `1fr` |
| angle | `deg(90)`, `rad(1)` | `90deg` |
| color | `rgb('#A0AEC0')`, `rgb(255, 0, 0)`, `luma(50)`, the constants `black`, `white`, `red`… | `rgb("#a0aec0")` |
| alignment | `left`, `top`, `horizon`…, `add(left, top)` | `left + top` |
| stroke | `add(pt(0.5), gray)` or `stroke({ paint, thickness, dash })` | `0.5pt + rgb(…)` |
| dictionary | an object literal with known keys (settings), or `data({...})` | `(x: 20mm)` / `("k": …)` |
| array | `readonly` JS arrays | `(a, b,)` |
| content | `string`, `Inline`, `Block`, `Content`, nested arrays, `false`/`null`/`undefined` (skipped) | depends on the mode |
| str | `string` | `"…"` |
| label | `label('regions')` | `<regions>` |
| none / auto | `null` (or `none`) / `auto` (an exported constant; **never** the string `'auto'`) | `none` / `auto` |
| function | references to `std` functions, `define` functions, `it => …` closures | `text`, `it => …` |

`add` is typed with overloads that follow Typst's rules: length+ratio→relative, length+color→stroke,
horizontal+vertical alignment→2D alignment. Any other combination does not compile.

`rgb('#…')` takes the type `` `#${string}` `` and is also checked at runtime with a regex. Even if
it were invalid, it would print as a string literal, so there is no injection; the check only
reports the error earlier. Numbers are checked at runtime: `NaN` and `Infinity` are rejected, and
`int` parameters require an integer.

## 2. Mapping `CastInfo` to TypeScript (generated)

| CastInfo | TS |
|---|---|
| `type length` | `Expr<'length'>` |
| `type relative` | `Relative` |
| `type ratio` / `fraction` / `angle` / `color` / `alignment` / `stroke`… | `Expr<'…'>` |
| `type int` / `float` | `number`, with an integer or finiteness check at runtime |
| `type bool` | `boolean` |
| `type str` | `string` |
| `type content` | `ContentArg` |
| `type none` | `null` |
| `type auto` | `Auto` (the `auto` constant) |
| `value "italic"` in a union | `'italic'`, as a union of TS literals |
| `type dictionary` / `array` / `function` | a shape from the overlay; without one: `DictOf<Arg>`, `readonly Arg[]` or `TypstFunc` |
| `any` | `TypstValue`: any `Expr`, or JSON data through `data()` |
| `union` | a TS union of the above |

The overlay (`spec/overlay.ts`, hand-written and typed against the dump's schema):

- Gives shapes to dictionaries and arrays: `inset`, `outset`, `radius`, `margin` (`top`, `x`,
  `rest`…), the `stroke` dictionary, the items of `font`, `columns`/`rows`
  (`readonly (Auto | Relative | Fraction)[]`), and callbacks (`fill: (x, y) => …`), informed by
  the builtin types of [tinymist](https://github.com/Myriad-Dreamin/tinymist)
  (`tinymist-analysis/src/ty/builtin.rs`).
- Fixes the constructor signatures of `text` and `page`: `body` is positional and required, and the
  `text: str` field is hidden.
- **`set` rules:** `settable` fields can be set, and also the named `#[external]` shorthands
  (`block.spacing`, `grid.gutter`, `table.gutter`, `pad.x/y/rest`, `circle.radius`…). Checked:
  `#set block(spacing: 1em)`, `#set grid(gutter: 3pt)` and `#set pad(x: 1pt)` compile with 0.15.1,
  and `#set text(body: [x])` fails. The generator's rule is
  `settable ∨ (named ∧ ¬positional ∧ ¬required ∧ ¬variadic)`, with exclusions in the overlay
  (`text.body`, `page.body`).
- **`where` fields:** the element's actual fields, i.e. its parameters except the shorthands, which
  are not fields.
- Every adjustment includes the original value it replaces. If the dump changes on a version
  upgrade, the generator fails and the adjustment has to be reviewed.

TS names are camelCase (`topEdge`, `rowGutter`) and convert to kebab-case (`top-edge`) with a
generated table. The parameter's documentation becomes JSDoc. Typst functions that collide with
reserved words are exported with an underscore: `enum_`.

### Shape of the generated functions

```ts
// src/gen/std.ts — GENERATED. typst 0.15.1, spec sha256:…
export const TYPST_VERSION = '0.15.1'

/** Text: Customizes the look and layout of text in a variety of ways. */
export const text: ElementFn<'text', TextNamed, [body: ContentArg], TextFields> =
  element('text', { pos: ['body'], named: { size: 'size', topEdge: 'top-edge', /* … */ },
                    settable: ['size', /* … */], fields: [/* … */] })

export const table: ElementFn<'table', TableNamed, ContentArg[], TableFields> & {
  cell: ElementFn<'table.cell', …>; header: …; footer: …; hline: …; vline: …
} = …
```

- Calling convention: `f(named?, ...positionals)`, as in Typst, where named arguments go first and
  content last. The named object is optional. The TS overloads are not ambiguous because a plain
  object is not `ContentArg`. At runtime they are told apart because a plain object has no `[kind]`
  brand.
- **Strict named objects:** the type rejects computed keys. With `{ [k]: v }` and `k: string`, TS
  infers an index signature, and `StrictKeys<O>` turns it into `never`. Extra keys are rejected too.
  The same holds for `dict()`. For data with arbitrary keys (JSON from an API) there is `data(json)`,
  which prints **every** key quoted, `("k": v)`, so there is no injection either.
- `contextual` functions (`here`, `counter.get`, `measure`…) require a `Ctx` token as their first
  argument. The token only exists inside `context(ctx => …)`, so calling them outside a context does
  not compile.
- Methods (`counter(…).get`, `str.len`…) are generated as methods of the `Expr<'counter'>`
  interface. They were left out of the first version (see §11).

## 3. Separation of modes

There is no mode the user can get wrong: the node's position decides the mode.

| Node \ position | In markup | In code |
|---|---|---|
| `string` | escaped text (§6.2) | `"…"` (§6.1) |
| `Expr<T>` (call, ident…) | `#expr`, plus `;` when needed | `expr` |
| `Inline` / `Block` | as is | `[ … ]` |
| `Stmt` | `#set …` on its own line | `set …` (inside `{ }`) |

Type rules, each with its type test (`@ts-expect-error`):

- `inline(...)` only takes `InlineArg`. Passing it a `Block` (heading, list) does not compile.
- A Typst parameter that is neither `content` nor `str` rejects `string`, `Inline`, `Block` and
  `Content`. For example `block({ inset: 'x' })` or `text({ size: strong('a') })`.
- `doc(...)`, `blocks(...)` and the body of a multi-line `[ … ]` take `Block`, `Inline` and `Stmt`.
- The name of a `let` or a `define` must be a literal (`const N extends string`, rejected if
  `string extends N`). At runtime it is checked to be a Typst identifier that is not a keyword.

### Composing content

```ts
inline('Prepared by ', strong(author.name), ' for ', strong(team.name), '.')  // joins with no separator
blocks(paragraph1, paragraph2)            // joins with a blank line (parbreak)
doc(stmt1, stmt2, m.heading(1, title), paragraph, table)   // consecutive statements get no blank line
// Conditionals and arrays without manual joins:
inline('Total: ', amount, discount > 0 && inline(' (', discount, '% off)'))
blocks(...items.map(renderItem))
```

Block markup sugar (`m`):

- `m.heading(level, …)` prints `= …`.
- `m.list(...items)` and `m.enum(...items)` print `- …` and `+ …`.
- `m.item(body, m.list(...))` is an item with a nested list.
- `m.terms`.

Inline formatting (`strong`, `emph`, `link`, `text`, `box`…) always uses the call form
(`#strong("…")`). The `*…*` and `_…_` delimiters are not used, because they depend on word
boundaries and the surrounding characters.

## 4. Rules and scripting

```ts
set(text, { size: pt(10), lang: 'en' })                // #set text(size: 10pt, lang: "en")
set(heading, { numbering: '1.' })
show(where(heading, { level: 1 }), set(text, { size: pt(16) }))
                                                       // #show heading.where(level: 1): set text(size: 16pt)
show(link, it => text({ fill: blue }, it))             // #show link: it => text(fill: blue, it)
show(heading, it => block({ below: em(1) }, it.body))  // `it` is ElemRef<'heading'>: it.body, it.level…
show('ACME', it => strong(it))                         // a text selector: the string is a literal
```

- `set(E, fields)`: `fields` is `Partial<Settable<E>>`, with strict keys.
- `show(selector, replacement)`: the selector can be
  - an `ElementFn`;
  - `where(E, Partial<Fields<E>>)`;
  - a `Label`;
  - a `string` (a literal) or `regex(string)`;
  - `selector(...).or/and/before/after`.

  The replacement can be `Content`, a `set(...)` or an `it => …` closure typed with the element's
  fields.
- `let_('logo', image('logo.svg', { width: mm(30) }))` returns `[stmt, ref]`, where `ref` is
  `Expr<'content'>` and prints as `logo`.
- `context(ctx => …)` creates `context …` and lends the `Ctx` token (§2).
- `importPackage('@preview/cetz:0.3.4', [cetz])` and `importFile('templates.typ', [panel])`. The
  source is checked to be a literal, and the items are declared values.
- `label('regions')` checks the name at runtime against the `<…>` syntax and throws if it is not
  valid. `labelled(node, lbl)` prints `node <lbl>`. `ref(lbl)` prints `@lbl`, or `#ref(<lbl>)` if the
  name ends in `.` or `:`.
- **Labelled `metadata`:** `labelled(metadata(data({...})), label('regions'))` prints in markup as
  `#metadata((…)) <regions>`.

## 5. Functions the document defines: `define` and `declare`

```ts
const card = define('card')
  .pos('name', T.content)
  .pos('value', T.content)
  .named('note', T.content, [])                  // a typed default value
  .body(({ name, value, note }) =>               // each parameter is an Expr of its type
    block({ width: pct(100), inset: mm(3), stroke: add(pt(0.5), gray), breakable: false },
      grid({ rows: [auto, mm(12), auto], rowGutter: mm(2) },
        strong(name), text({ size: pt(18) }, value), note)))

card.decl                                // Stmt: #let card(name, value, note: []) = block(…)
card('Growth', '+12%')                   // Content: card("Growth", "+12%")
card({ note: 'vs Q2' }, 'Growth', '+12%')
// @ts-expect-error: a positional argument is missing
card('Growth')
```

- The **positional order** is set by the builder (`.pos` in sequence), not by the key order of an
  object. There are `.rest('items', T.content)` for `..items` and `.returns(T.length)` when the body
  is not content.
- The caller's type comes from the builder: required positionals, optional typed named arguments,
  and the return type.
- **`declare`** is for a `#let` in a hand-written `.typ`: the same signature, without a body. It
  goes with `importFile`. (Implemented as `define(…).external()`.)

## 6. Printer

It is deterministic: the same input gives the same bytes. Named arguments print in the order of
the function's signature, not of the object that holds them, so the order of keys never matters;
positional arguments keep the user's order.

### 6.1 String literals (`str()`)

- `\` → `\\` and `"` → `\"`.
- U+0000–U+001F and U+007F → `\u{…}` in lowercase hex, including `\n`, `\r` and `\t`. It is a
  single form, and Typst accepts it. JSON escapes are not used.
- **Lone surrogates**: Typst leaves `\u{d800}` as literal text, so they cannot be represented.
  Decision: a `TypeError` is thrown.

### 6.2 Text in markup (checked with probes against 0.15.1)

- Every character with a meaning in markup is escaped with `\`:
  `` \ [ ] { } # $ * _ ` < > @ = - + ~ ' " ``.
  - `/` only where it means something (see §11): a comment (`//`, `/*`), a term at the start of a
    line, or at the end of a text, where what follows is unknown.
  - `'` and `"` avoid smart quotes, so the data stays literal.
- `.` is escaped when it follows another `.` (`...` would be an ellipsis) and in `\d+.` at the start
  of a line (an enum).
- Control characters, including line breaks, are written as `\u{…}`. So text **never** puts a line
  break in the source. Checked: `[x\u{a}y]` keeps the `\n`.
- Runs of 2 or more spaces are written as `␠\u{20}…`, because Typst collapses `[a  b]`, while
  `[a\u{20}\u{20}b]` keeps both spaces.
- Everything else is emitted as is: letters, digits, single spaces and Unicode.

### 6.3 Code embedded in markup

- `#` + expression. If the next emitted character is not a space, `]` or the end of the text, `;` is
  added. Checked: `#f("C")[x]` swallows `[x]` as an argument, while `#f("C");[x]` works.
  Identifiers also continue with letters, digits, `-` and `_`, and `;` solves that too.
- Expressions that do not start with an identifier, literal or call (`-1pt`, `a + b`) are wrapped in
  `#(…)`.
- Statements (`#set`, `#show`, `#let`, `#import`) always go on their own line.

### 6.4 Numbers

- int: decimal digits.
- float: the shortest form that round-trips. If it is an integer, `.0` is added. Exponents are
  allowed (Typst accepts `1e-7`).
- Values with a unit: always decimal, **without** an exponent, because `1e-3pt` reads as `0pt`.
- `NaN` and `Infinity` are rejected. `-0` → `0`.

### 6.5 Layout

- A call goes on one line if it fits in 80 columns. Otherwise one argument per line, indented by 2,
  with a trailing comma.
- Content as an argument in code:
  - **inline** → `[…]` with no padding (`box[\n hi\n]` adds spaces, checked);
  - **block** → `[\n` + indentation + `\n]` (nested lists inside indented blocks work, checked).
- A JS `string` in a content position in code always prints as a `"…"` literal, which Typst turns
  into text without interpreting it. If the last positional argument is markup (`Inline` or
  `Block`), it prints as a trailing block: `block(inset: 3mm)[…]`.
- Lists: 2 spaces per level. If an item has several blocks, the continuation lines are indented to
  the item's level.
- Exactly one blank line goes between markup blocks. None goes between consecutive statements.
  There is no trailing whitespace, and the file ends with a single `\n`.

## 7. Escape hatch

```ts
unsafeRaw.markup`#pagebreak(weak: true)`        // Block
unsafeRaw.code<'length'>`page.width - 2cm`      // Expr<'length'>
```

- The signature is `(s: TemplateStringsArray, ...values: never[])`, so a `${x}` interpolation does
  not compile.
- The ESLint rule `typed-typst/unsafe-raw` (from `@onparallel/typed-typst/eslint`) allows only a tagged
  template written in the source, so `unsafeRaw.code(arr as any)`, an alias, a renamed import or
  `Reflect.apply` fail lint. `typed-typst/literal-path` keeps `path()`, `includeFile()` and
  `importFile()` to literals.
- Proposed but not implemented: restricting `unsafeRaw` to listed files, counting its uses in CI,
  and CODEOWNERS for those files.

## 8. Generation pipeline and version

```
tools/reflect (Rust, typst = "=0.15.1", Cargo.lock, rust:1.92-slim@sha256:…)
   └─ pnpm reflect ─▶ spec/typst-0.15.1.json        (committed, sorted keys)
spec/overlay.ts (hand-written) ─┐
                                └─ pnpm gen ─▶ src/gen/*.ts (types + runtime tables, committed)
```

- The generated output's header carries the version and the sha256 of the spec. Generated code is
  mostly data, and one runtime (`element()`, `func()`) builds the nodes.
- **CI:** `pnpm gen && git diff --exit-code`, `tsc --noEmit`, `vitest` (including type tests and the
  `typst compile` of examples) and `pnpm typst:check`.
- **Pinning:**
  - `pnpm typst:check` compares `typst --version` (and `typst eval 'sys.version'`) with
    `TYPST_VERSION` and fails if they differ. The test helper calls it before every `typst compile`.
  - Optionally, `versionGuard()` emits `#assert(sys.version == version(0, 15, 1), message: "…")` so
    the document itself fails with another binary.
- **Upgrading:**
  1. Change the version in `tools/reflect/Cargo.toml` and in `typst-version`.
  2. `pnpm reflect`, then `pnpm gen`.
  3. Review the JSON diff. Adjustments whose original value no longer matches fail.
  4. Fix the `tsc` errors in the examples and update the snapshots.

## 9. Test oracles

- **`str()`:** fast-check over arbitrary strings, including control characters and surrogates. It
  writes `#metadata(<str(s)>) <x>` and runs `typst eval 'query(<x>).first().value' --in f.typ`. The
  result must equal `s`. Many cases go in one file, so as not to start a process per case.
- **Text in markup:** a Typst function extracts the plain text of content by walking `text`,
  `space`, `children`, `body` and `linebreak`. It is compared with the input in every position: body,
  heading, list item, table cell, `strong`, `link`, the content of a `define`, `metadata`. The fixed
  hostile inputs are `#x @y $z$ *b* _e_ [x] <l> \ "q"`, `//`, `/*`, `1. `, `- `, `= `, `...`, `--`
  and control characters.
- **Snapshots** of the source, and `typst compile` of each example.
- **Types:** `@ts-expect-error` for each rule of §3, for computed keys and for `unsafeRaw` with
  interpolation.

## 10. Complete example

The example is in `examples/report.ts`: a report with page setup, a `set`/`show` preamble, a
heading, a table, a nested list, cards defined with `define`, and labelled `metadata`. It prints
with hostile data to `examples/out/report.typ`, compiles without warnings, and
`typst eval 'query(<regions>).first().value'` returns the regions. `examples/scripting.ts` covers
rules, `let`, `context`, labels, references, imports of a `.typ`, `unsafeRaw` and math.

## 11. Changes made while building it

- **Lone surrogates:** an error is thrown, in `str()`, in markup text and in `data()`.
- **Calls of `define` functions:** named arguments go first, `card({ note: 'vs Q2' }, 'Growth',
  '+12%')`, as with generated functions.
- **`label(name)`:** takes any `string` and checks it at runtime. A name that comes from data cannot
  inject anything.
- **`define` parameters:** may be named like a definition of the standard library (see "Hidden
  standard names" below).
- **`set` with positional fields:** supported, e.g. `set(align, { alignment: center })` prints
  `#set align(center)`.
- **Wide lists:** `m.list({ tight: false }, …)` separates items with a blank line. In Typst this
  changes the spacing.
- **Optional positionals before a required one:** cases like `align(alignment?, body)` are generated
  as a union of tuples.
- **Generation by list:** generation was first limited to an `include` list of 62 functions in
  `spec/overlay.ts` (superseded below: the whole library is generated).
- **Text oracle:** in 0.15, a markup escape like `\#` produces a `symbol` element with a `text`
  field. The extractor handles it.
- **Reproductions of Typst's suite:** `test/suite/` reproduces cases of Typst 0.15.1's `tests/suite`.
  They were first compared as PNG pixels, and later as byte-identical PDFs (below).
- **The whole standard library is generated:** 410 functions. The overlay lists what is excluded:
  `eval` and `plugin`, because they would turn data into code, and `rgb`, `luma` and `label`, which
  are hand-written. Types export their constructor plus their scope (`str.len(s)`), modules are
  objects (`calc.abs`, `math.frac`), and a value's methods are derived by dropping `self`.
- **Enum items with a number:** `m.numbered(n, …)` prints `n. …`.
- **Types with methods** (first only `color`, `counter` and `state`; now all, see below): the
  constructor (`counter(page)`) returns a value with its methods (`.update(5)`, `.display(ctx)`).
  The colors of `values.ts` have the methods of `color` (`aqua.lighten(pct(50))`).
- **`f.with({...})`:** applies named arguments and returns a function.
- **`codeBlock([rules], value)`:** prints `{ set …; value }`.
- **`show` closures:** also get the `Ctx` token as their second argument, because Typst evaluates
  them in context. A closure returns a value: a JS array is a Typst array.
- **`add`:** also adds numbers, strings and content (`it.body + [!]`).
- **Results of unknown type:** an `any` result (`counter.display()`) is `Expr<'any'>` and can be
  shown in markup.
- **Typed holes in `unsafeRaw`** (superseded by named variables, below):
  `` unsafeRaw.code`if ${it}.level == 1 { ${title} } else { ${it} }` ``. A hole was never pasted
  into the source: it was bound to a variable (`let rawhole0 = …`) that the snippet named. The
  `if`/`for` DSL is not implemented: Typst logic goes in `.typ` files (`.external()`) or in
  snippets.
- **Symbols:** the extractor dumps `sym` and `emoji` with their variants, and the generator creates
  `src/gen/sym.ts`.
  - Modifiers are typed properties, e.g. `sym.arrow.r.double`.
  - A symbol is `Expr<'symbol'>` and is accepted as content.
  - Submodules (`sym.control`) are not values.
  - Deprecated variants are left out.
  - A test checks every generated path in Typst, about 2,700.
- **`unsafeRaw` with named variables**, replacing the `${}` holes:
  `` unsafeRaw.code({ title })<'content'>`…` ``.
  - The text is literal and takes no `${}`. Values enter only as `let name = …` before the snippet.
  - Names are checked: they are identifiers (not `std`) and must appear in the text.
  - The lint rule requires an object literal and the tagged-template form.
  - `unsafeRaw.math` and `unsafeRaw.math.block` print `$…$` and `$ … $`.
- **File paths:** where Typst takes a `path`, a JS string is rejected, in the types and at runtime.
  The path must come from `path('literal')`. So data never decides which file the document reads
  (`image`, `read`, `json`, `pdf.attach`…).
- **Converting Typst's suite:** `scripts/convert-suite.ts` converts the suite's cases to the API
  from the syntax tree of Typst's own parser. Where the API falls short, it uses `unsafeRaw`
  snippets at the smallest possible expression. `scripts/check-converted.ts` compares each
  conversion with the original; `pnpm test:corpus` fails if a case that passed no longer does.
- **Rules inside a line:** `inline('A ', set(text, { fill: red }), ' B')` prints
  `A #set text(fill: red); B`, and the rule applies to the rest of the paragraph. After a statement
  on its own line comes a single line break, not a blank line, so what follows continues in the
  same flow.
- **`space`:** a markup space, which collapses with others and is trimmed at the edges of a
  paragraph, unlike `' '` in data, which is kept exactly.
- **`contentBlock(x)`:** content as a value, `[…]`; it lets block content go inside a line.
- **Prettier:** formats the repo's code (`pnpm format`). Generated and copied files are left out;
  the suite's conversions are formatted when generated.
- **Typst's test assets:** the corpus uses `typst-dev-assets` (`tools/dev-assets.sh`, pinned to the
  same version) with its fonts and images, as Typst's runner does. A case whose original does not
  compile here counts separately (`original-error`), not as a failure of the library.
- **Byte-identical PDFs:** the comparison moved from PNG pixels to byte-identical PDFs
  (`--creation-timestamp 0`), which also covers what a picture does not show: links, bookmarks,
  metadata and the tagged structure. Conversions are type-checked too, and only count when they
  compile.
- **`unsafeRaw`:** `\\`, `` \` `` and `\${` are escapes, as in any JavaScript template; other
  backslashes stay as they are. So a snippet can end in a backslash (`\\`).
- **`read(path)`** is hand-written: it returns `Expr<'str'>`, or `Expr<'bytes'>` with
  `{ encoding: null }`.
- **Types of the fields of `it`, and `assume`:** in a `show` rule, each field has the type its
  parameter accepts when the element is built (e.g. `inset`: length, dictionary or `auto`), not the
  resolved type, which Typst's reflection does not give. `assume<'relative'>(it.inset)` asserts the
  type for TypeScript only: it does not change the output or let data in as code, and if it is false,
  Typst fails to compile. The converter only uses it when the two types overlap.
- **The test runner's helpers:** the comparison's prelude defines `test`, `test-repr`, `print` and
  `lines` in Typst, as Typst's runner does, and each case compiles in its folder of the repo
  (`tests/suite/…`) so relative paths resolve the same. Only `bounds`, a layout debugger, stays out.
  The conversions declare the helpers as `define(…).external()`.
- **`external(name)` and `f.with(…)` on defined functions:** `external('forest')` names a value the
  document does not define (an import brings it, or the file that includes this one defines it); it
  is `Expr<any>`, like any value whose type only Typst knows, and can go in the list of
  `importPackage`. `define` functions (also `.external()` ones) have `.with({…})` with typed named
  parameters, for `show: template.with(title: …)`. The converter uses `external` for `conifer` and
  `forest`, the runner's colors, instead of copying their RGB value.
- **Typst Universe templates (`test/universe/`):** real documents (papers, theses, CVs, letters)
  with their package pinned (709 now). For them: `dict({…})` (keys as written, for templates
  that read `showTitle`), `includeFile('x.typ')`, and `define` parameters are declared with their
  Typst name (`'font-size'`) and passed in camelCase (`fontSize`), as in the standard library. `_` is
  no longer accepted as a name (in Typst it is the placeholder of patterns; the property test found
  it).
- **Methods on any value of a known type:** every value the API gives (`let_`, results of functions
  and methods, fields of `it`, `assume`, `unsafeRaw.code<T>`, `data`) is `Value<T>`, with the
  methods of its type if `T` is one type: `c.update(2)`, `datetime.today().display(…)`, `it.func()`.
  At runtime the methods live on a shared prototype, by name, because Typst picks the method from
  the value's type; methods of several types with the same name share a table, and a load-time check
  makes sure they convert their arguments alike. `Expr<any>` and unions have no methods: they need
  `assume<T>()`.
- **`spread(values)`:** `..values` in variadic arguments (`grid(spread(cells))`). It only fits where
  the function has variadic arguments, in the types and at runtime. The color maps
  (`color.map.rainbow`) come from the overlay, because reflection does not dump values; a test
  compares the list with Typst.
- **`times` and `add`:** `times` repeats arrays, strings and content (`times([fr(1)], 3)`), in the
  order given; `add` concatenates arrays.
- **Module imports and renamed items:** `importPackage(spec, m)` prints `import "…" as m`; its
  members are `external('x', m)` and `define('f')….external(m)` (`m.f(…)`). A renamed item is
  `{ item: 'generate-link', as: orcidLink }`.
- **Hidden standard names:** the document can name a variable, a parameter or an import like
  something of the standard library (`#let title = …`), as in Typst. The types cannot follow what
  each name means, so the printer writes the library's definition as `std.title` whenever the
  document binds that name anywhere, and `std.title` always means Typst's. Only `std` cannot be
  bound. Parameters that take one of a set of strings (`scope: "column" | "parent"`) also take
  `Expr<'str'>`, like the value of a parameter.
- **A property-test finding:** a key like `𲎰` (newer Unicode than Typst's) is an identifier for JS
  but not for Typst; `dict()` only writes ASCII keys unquoted.
- **`T.oneOf(…)` and paths:** where Typst reads a string as a file unless it is one of its names
  (`bibliography(style: …)`), only the literal, `path('…')` or a `T.oneOf('apa', 'ieee')` parameter
  of a `define` go in: callers can only pass one of those names (types and runtime), and the body
  forwards it as `OneOf<…>`, which the parameter accepts if all its names are its own. An arbitrary
  string never becomes a path. Error messages say what to do instead (camelCase, `path('…')`,
  `T.oneOf`, `unsafeRaw` for fields Typst computes).
- **`check(doc)` in `@onparallel/typed-typst/node`:** prints the document, compiles it with the Typst binary (the
  source goes in on stdin, so nothing is written into the project) and returns the PDF or Typst's
  diagnostics, each with its line of the printed source and its hints. It is the feedback loop that
  someone who generates documents without seeing them, like an agent, needs.
- **Fewer escapes, `lineSpace` and shorthands:** an escape is an element of its own in Typst, so
  `GB\/T` laid out and tagged differently from `GB/T`; `/` is now escaped only where it means
  something. `lineSpace` is a space written as a source line break, which Typst drops between CJK
  characters; after it, text starts a line and is escaped as such. The converter writes shorthands
  (`---`, `...`) as symbols, which is what they are in Typst.
- **From the snippets to the API:** the converter now says why each snippet was needed, and the most
  common reasons became API: `codeBlock([...])` with statements and expressions (the block's value
  joins theirs), `set(…, { if: cond })` for `set … if`, `with` with the first positional arguments
  (`columns.with(2)`), `data()` holding Typst values (so literal arrays and dictionaries have
  methods), constants and values from the overlay (`calc.pi`, `float.inf`, `sys.inputs`,
  `math.sin`, `math.quad`), `_` closure parameters, and `assume` where a result typed as a union
  goes where one of its types does (`calc.rem` as an index).
- **Feedback from use:** functions from `define` are `unsafeRaw` variables, and a
  variable that already has its name (a parameter of the `define` whose body holds the snippet)
  gets no `let x = x`; `unsafeRaw` removes the indentation the TypeScript file gives the template;
  units print with 15 significant digits, without the noise of JS arithmetic (`246.2mm`, not
  `246.20000000000002mm`); `rgb('#A0AEC0')` keeps the case it was given; `T.orAuto(t)` for
  `length | auto` parameters; `NamedOf<F>` names the object of named arguments of a function
  (`Parameters<typeof f>` does not work on overloaded callers); `unsafePath(p)` is the explicit,
  greppable way for a computed path (`assets/${hash}.png`); and `@onparallel/typed-typst/eslint` exports the
  `unsafeRaw` lint rules for projects that use the library.
- **`inline` as a template:** ``inline`Thank you, ${strong(name)}.` `` is the same as
  `inline('Thank you, ', strong(name), '.')`. The text of the template is text, escaped like any
  string, never Typst (the opposite of `unsafeRaw`); `${…}` takes elements or data. A line break with
  its spaces and tabs is one space, or a `lineSpace` next to CJK characters or to a value, so prose
  can span lines of the TypeScript file. The converter writes paragraphs this way, joining adjacent
  texts and the spaces between them.
- **From the failing Universe templates:** a parameter that takes content or a function
  (`supplement`) takes a JS function as a closure, where it used to throw; `let_('n', 150)` is an
  `int` and `let_('x', 1.5)` a `float` (a number known only at run time stays `int | float`), as
  the literal prints. The converter lists what a `*` import of a project file brings (Typst reports
  the exports, as for packages), names the parameters of nested closures as the printer does
  (`x2`), writes an array body of a function as `data([…])`, passes a positional dictionary to a
  function of the document as `dict(…)`, puts the alignment of `align([body], horizon)` first, and
  leaves a computed string that goes to a file
  parameter, or a `text` positional of unknown type, as a snippet.
- **Bundles:** the generator marks its top-level calls `/* @__PURE__ */`, so a bundler drops the
  definitions a program does not use (a small document: 49 kB minified instead of 121 kB). The one
  module with a side effect, `gen/std`, which installs the methods of values, is listed in
  `sideEffects`. `test/bundle.test.ts` bundles the library for the browser with esbuild and checks
  both, with a size budget.
- **Package versions:** Typst `a.b.c` is version `a.b.(c × 100 + r)` of the package, `r` counting
  its releases for that Typst version (`0.15.100` for Typst 0.15.1). Unlike `0.15.1-1`, which semver
  reads as a prerelease that sorts before `0.15.1` and that ranges skip, it is an ordinary version:
  it sorts after the previous release and `^0.15.100` works. A test checks it against
  `typst-version`.
- **Path literals print as strings where the call is written:** `image(path('a.png'))` prints
  `#image("a.png")`, as a person writes it and as packages written before Typst's `path` type
  expect when they read the field (`bib.sources`). Typst resolves a string where the function that
  reads it runs, and a path where it was made, so the two differ only once the value travels:
  passed to a function of the document or of a package, bound with `let`, in `.with` or in a set
  rule, a path still prints as `path("…")`. The types do not change: a file is still only
  `path('literal')` or `unsafePath`.
- **Blocks in a list item:** each child of `m.item` (also `m.term`, `m.numbered`) is a new
  paragraph, after a blank line, except a nested list right after a tight list's item. To go on
  the lines right after the item's text, the body is `m.lines(text, …)`. Before, a first child
  `m.lines` followed the text directly while any other child did not, so an item could not have a
  second paragraph with a list attached to it (`m.item('A', m.lines('Second paragraph', list))`).
  The converter writes items this way.
- **Fewer escapes, again:** an escape is an element of its own (`symbol`), which word counters and
  packages that read their content's text see (a checklist's `[x]`, a table written as `| a | b |`,
  `wordometer` counting `33\.33` as two words). Brackets that pair up within a text stay text (they
  nest like a content block's); `<` is escaped unless a space follows; a `-` at the end of a text,
  where the next node is never text, is not; and `1.` is an enum marker only before a space or at
  the end. Probes against Typst 0.15.1 and the injection property tests check each rule.
- **Block content at the edges:** `[\n  = H\n]` is a space, the heading and a space, and the spaces
  end up in the heading's outline entry and tagged structure; a heading alone prints `[= H]`. Other
  blocks keep their lines (a package may read the `children` of a list's content). A `parbreak()`
  at the start or the end of block content prints as a blank line there (`[\n\n  …\n\n]`), as
  written by hand, instead of `#parbreak()` between the edge spaces.
- **`=` and `+` at the start of a line** are a heading or an enum marker only before a space or the
  end of the line, so `++14/` or `=x` print as they are (a package may read them).
- **The rest of Typst's suite:** the corpus also takes the suite's `eval` cases (code that runs
  without pages, compared as PDFs too) and `pdf`/`pdftags` cases, 2,380 in all. What they needed:
  `luma(l, alpha)`; a JS function without parameters is `(..) => …`, which ignores the arguments
  Typst passes (`() => 1` used to print `it => 1`, which needs one); `arguments_({ a: 2 }, 0)`
  passes `a` by name (its sink takes any name); a `bigint` is an int beyond JS numbers
  (`9223372036854775800n`); `label(name)` takes any name in code (`label("DBLP:books/x")`), and
  only label syntax attaches in markup; `add`, `minus` and `times` type dates, durations,
  decimals, bytes, arguments and ratio by ratio; `spread` takes a dictionary; `data` holds
  functions and types; a code block may hold a closure. The converter writes a float with no
  fraction as `float(12)` (a JS `12.0` is `12`), maps `stroke(2pt, red)` by type, keeps the `block`
  field of raw text bound with `let`, and types a `let` of an array literal as data.
- **Bindings the document reassigns:** a name the case assigns to with `=` may change type
  (`what.insert("what", what = (:))` turns an array into a dictionary mid-call), so the converter
  gives it no fixed type and its methods are snippets.
- **Publishing:** `pnpm test:package` packs the package and type-checks an empty project that uses
  it with TypeScript 5.4, 5.9 and 6 under `nodenext` and `bundler`; `pnpm docs` builds the API
  reference with TypeDoc, the hand-written library first and the generated bindings in their own
  categories (the generator tags them, and escapes `@` in Typst's docs). The generator fails on an
  overlay entry the spec does not have. Moving to a new Typst version: docs/upgrading-typst.md.
- **Security review** (SECURITY.md says what holds and what does not). What changed:
  - Markup: a text after leading spaces starts a line (`- ` there is a list), a term escapes its
    `:` and brackets, and `-` before any number (`\p{N}`, as Typst's `is_numeric`) is escaped
    where a new token starts (after a space, `:`, a bracket or an escape). `<.a>` is no label.
  - Names are checked again where they print (identifiers, fields, arguments, parameters, `let`,
    imports), a label in code is `<x>` only for ASCII label syntax, else `label("…")` (or
    `std.label(…)` when the document binds `label`), and an object key that is no ASCII identifier
    prints as a string key; two keys that are one in Typst throw.
  - Files: a string inside an array or `data()` at a file parameter throws; `Literal<N>` rejects
    template literal types (`` `uploads/${string}` ``), so `path`, `includeFile`, `importFile` and
    the names of `define`, `let_` and `external` take only literals; `includeFile` and `importFile`
    check for a string at run time.
  - `Importable` carries a private symbol that only `external` and `define` set: a `{ name }`
    object (from data, or written by hand) is no module. This changes the API: a module was any
    `{ name }`.
  - `data()` takes only what `JSON.parse` makes: a `Date`, a `Map` or a class instance throws
    instead of printing `(:)` or losing its getters. This changes the API.
  - Values: only own properties are read (a polluted `Object.prototype` adds nothing), holes in
    arrays throw, values nest at most 256 levels (Typst's parser stops before), `-2^63` prints as
    `(-9223372036854775807 - 1)`, an async closure throws, and a value that is not an expression
    where one is required fails clearly.
  - The ESLint rules are a plugin (`@onparallel/typed-typst/eslint`): `unsafe-raw` is an allowlist (a
    `no-restricted-syntax` selector matched names, so an alias, a renamed or namespace import,
    `Reflect.apply` or a cast got past it) and `literal-path` is new. `unsafeRawRules` is removed.
    The runtime check of a template also requires a frozen, non-enumerable `raw`.
  - `check()` takes `timeout` and `signal`, passes options as `--flag=value`, rejects input names
    with `=`, and ignores `EPIPE` when Typst exits before reading the source; the version must be
    on the first line of `typst --version`.
  - CI: a read-only token, actions pinned by commit, and Typst's download checked by sha256.
- **Security review, more fixes:**
  - Files: the run-time check was a hunt for strings, and a value computed in Typst
    (`data(x).at(0)`, a `T.any` parameter, `sys.inputs`, `.map(json)`) reached a file parameter
    with no cast. It is now an allowlist: a WeakSet holds the expressions the library knows are
    files (`path`, `unsafePath`, bytes a function makes, `read(…, encoding: none)`, `let_` and
    `T.path`/`T.bytes` bindings of them); a file parameter takes those, its names, `none`, `auto`
    and arrays of them. The generator marks functions that return bytes (`bytes: true`), whose
    positional parameter is a file (`reads: true`: as a value they would read what Typst passes
    them) and parameters that take a selector (`sel: true`, and `figure.kind`, where such a function
    is a value by right). `unsafePath` takes an expression for a path a trusted template computes.
    Dynamic results stay TypeScript `any` (`Expr<any>`): making them a type that does not fit a
    path would need `assume` everywhere, and the run-time check already holds.
  - Markup escaping read its growing output back (`out[i]`), which V8 flattens each time: it was
    quadratic, so a few hundred kB of text blocked the process for minutes. It builds pieces now.
  - A `define` with `..rest` took `bib-style` for `bibStyle` and bound the parameter past its check.
  - Prototype pollution: generated tables are frozen copies without a prototype, and the printer
    reads node fields only when own (a key `ident` on `Object.prototype` printed as code).
  - `unsafe-raw` missed names written as strings (`import { 'unsafeRaw' as u }`), which with a
    forged template ran data as code; `literal-path` saw only direct calls.
  - Smaller: a label on blank content, data spaces next to a space node, `lineSpace` in a term,
    code nested in steps past Typst's parse depth, deep values printed with ever more indentation,
    variables of `unsafeRaw.markup` that stayed bound, and `check()` leaving Typst running behind a
    wrapper or after the caller exits.
  - Kept, and documented in SECURITY.md: a plain object given first is named arguments when its
    keys are parameters (changing it would change every call; `data()` is the way for outside
    objects), labels with characters of a newer Unicode than Typst's, diagnostics data can shape,
    and Typst's own costs for small numbers (`numbering('I', 1e13)`).
  - The corpora measure what the allowlist costs: 12 of the 709 Universe templates and 4 of the
    2,380 suite cases pass a path that Typst computes (`bibliography(bib-file)` with
    `#let bib-file = "refs.bib"`, `toml("profile_" + profile + "/metadata.toml")`). The converter
    writes those `unsafePath(…)`, which prints the value as it is; a file reader given to a
    template (`logo: image`) stays a value, since only a `define` or template parameter gets it.
- **Review of the conversions** (agents read all 3,089 against their originals; nothing changed a
  PDF, a few changed the source's meaning): the converter now converts `include` as a value, every
  `*` import (one that lists nothing stays a snippet: `import "x"` would bind the module's name),
  members of imported names (`palette.coral` is `external('coral', palette)`), methods on std
  constants and unit literals, escapes the library makes from plain text as plain text and
  shorthands as named symbols (`sym.dash.em`); it no longer wraps bytes or typed references in
  `unsafePath`. In the library, units, alignment and direction constants and the results of `add`
  and `minus` have the methods of their type. Universe went from 293 to 386 templates written with
  the API alone. Left as they are: math and control flow (snippets by design), a spread before
  positional parameters that follow the variadic one (`gradient.linear(..stops)`, whose `dir` is
  positional too), and `for` loops, which the suite tests as loops.
- **Decisions after the conversion review:** `call(f, …)` calls a function value only Typst knows
  (`Expr<any>` result, arguments untyped; a JS array is content), and `let_([...names], value)`
  destructures (`null` is `_`): together they let a template's `let (doc, cover, …) =
  documentclass(…)` stay typed. `div` and `neg` complete the arithmetic; comparisons and logic are
  left out, as they belong to `if` and `for`. A define's `.with` takes positional arguments. An
  `inline` template's own quotes are smart quotes, as typed in Typst (quotes are typography, not
  syntax); values keep theirs. Found while adding `call`: `define('eval')….external()` printed
  `eval(…)` with any string, and `define('image')….external()` read the file data named, since a
  name the document does not bind is the standard library's. A reference to one of the functions
  that read files or run code now prints only if the document imports or binds the name.
- **Data, templates and prose:** as in Typst, where a string is literal and only typed markup gets
  typography, data (strings, values) is shown exactly; an `inline` template's own text is markup
  the author typed, so its quotes, `--`, `---` and `...` are left to Typst (smart quotes, dashes, an
  ellipsis); `prose(value)` gives data that is prose the same (a line), and `prose.paragraphs(value)` paragraphs on blank lines.
  Data stays exact by default because only the program knows which data is prose: typography
  would change a code (`REF--2024`) or a command (`build -- --watch`) unnoticed, while a forgotten `prose`
  only shows straight quotes. A text node carries `prose`, kept per character when texts merge, so
  a run (`--`, `...`) is typography only when all of it is prose; the rest is escaped as before.
- **Fixes for the new API (call, readers, prose):** the security review of `call`, `let_` patterns,
  positional `.with` and `prose` found that function values were the gap: the check on `.map(json)`
  saw only the bare function, so `csv.with()`, a `define` with a `T.path` parameter and an
  element's `func()` let Typst read a file data named, through `call`, `.map` or a template. One rule
  now covers them: a function that reads a file it is given (a WeakSet marks the values: a `.with`
  that leaves a positional file out, a define with a positional `T.path`, `T.bytes` or
  `T.oneOf`) goes nowhere as a value except a selector or a figure kind, and `call` calls only names
  and their fields, not a field of a parameter (`it.kind`). A define's default may be a reader: it
  is part of the definition. The names that unlock `eval`, `image`… were gathered from the whole
  tree, so a binding after the use, in a block, in a snippet, or `let eval = eval` unlocked them; the
  printer now adds a name after printing its top-level statement (also one in a paragraph or `m.lines`). A name bound to a file was
  rebound to data (`let notes = "secret.txt"`) or by a snippet variable from extra keys of a typed
  object: a file name is now bound once (all its bindings files), and snippet variables are no
  Typst names. `#context a + b` in markup let data after the `+` be markup; non-atomic bodies are
  parenthesized, and `include` in `context` or a term ends with `;`. Unicode 17 letters (JS) that
  Typst 0.15.1 rejects: labels in markup and named-argument keys are ASCII (ASCII, not a table of Unicode 16, which would move with each Typst upgrade). Prose kept its own quadratic regexes and copied flags per merge
  (both linear now), let `-` after a prose quote become a minus, trimmed piece edges (`see ` +
  `strong`) and threw on CJK line spaces in headings. The lint rules report the name `unsafeRaw`
  kept in a variable and type arguments on `path` (`path<'a'>(any)`); re-exports and dynamic
  `import()` of a computed name stay outside what they see (reporting every re-export would flag ordinary modules). Typst panics on two inputs of text (SECURITY.md).
- **An element's `func()` stays a value:** marking it as a reader (it is `image` for an image)
  refused harmless uses such as `test(my-grid.func(), std.grid)`, and the hole needs code written to
  hand it to data (`data(files).map(it.func())`). `call` still refuses `x.func()` as its function;
  SECURITY.md lists the rest.
- **Releases:** release-please on `main`, as in the other packages of the organization: Conventional
  Commits, a release PR for `fix:` and `feat:`, always a patch bump (`r` in `a.b.(c × 100 + r)`;
  a new Typst version is a `Release-As:` footer), and a publish job that stages the version with
  npm trusted publishing (OIDC, with provenance); the maintainer approves it on npm.
