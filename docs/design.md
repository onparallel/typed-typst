# Design: a typed generator of Typst source (Typst 0.15.1)

typed-typst prints Typst source from typed TypeScript calls. This document describes its design:
the node model, how Typst's types map to TypeScript, the printer's rules, the escape hatch, the
generation of the bindings and the test oracles. The bindings come from a reflection dump of
Typst's own definitions (`tools/reflect/`) and a hand-written overlay (`spec/overlay.ts`).

## 0. Principles

1. **The user writes no Typst syntax.** No `#`, `[`, `]`, `;` or `<label>`. The printer chooses the
   syntax from the position of a node in the tree.
2. **A JS `string` is always data.** In code it prints as an escaped `"…"` literal. In markup it
   prints as escaped text. The library never reads it as code.
3. **Every Typst value has a TS type.** `size: '12pt'` does not compile, because `size` expects
   `Expr<'length'>`. A `string` compiles only where Typst takes `str`, `content` or one of a set of
   names (`'normal' | 'italic'`), and there it prints as a string literal or as escaped text.
4. **One escape hatch, easy to find with grep:** `unsafeRaw` (and `unsafePath` for a computed
   file path).
5. **The library stops where Typst decides at run time.** It builds documents: elements, rules,
   functions the document defines, values. It does not model what only Typst knows (how content
   compares, the type of a value a callback gets, code that runs), and it does not print syntax
   whose meaning depends on its neighbours (markup lists, headings). Past that line, the user
   writes Typst with `unsafeRaw`. A feature that needs the library to imitate Typst's semantics
   stays out.

Two more rules follow. The library escapes data; it does not follow Typst values through bindings
or functions to decide which file a document reads (Typst's `--root` does that). And printing is
linear in the size of the input: no regular expression that can backtrack on data, and no copy of
a growing string per step.

## 1. Node model

### 1.1 Internal tree (`src/core.ts`, not public)

```ts
type Code =
  | { k: 'str'; v: string } // "…"
  | { k: 'lit'; v: string } // a number, unit or keyword, already printed
  | { k: 'ident'; name: string; std?: true } // std: a name of the standard library
  | { k: 'field'; target: Code; name: string }
  | { k: 'call'; callee: Code; args: Arg[]; trailing: Markup | null }
  | { k: 'binop'; op: '+' | '-' | '*' | '/' | '=='; l: Code; r: Code }
  | { k: 'neg' | 'group'; v: Code } // -x, (it.kind)(x)
  | { k: 'array'; items: Code[] }
  | { k: 'dict'; entries: [{ ident: string } | { str: string }, Code][] }
  | { k: 'label'; name: string }
  | { k: 'closure'; params: string[]; body: Code }
  | { k: 'content'; body: Markup } // [ … ]
  | { k: 'context'; body: Code }
  | { k: 'block'; stmts: StmtNode[]; value: Code | null } // { … }
  | { k: 'raw' | 'snippet' | 'math'; src: string /* … */ } // unsafeRaw
  | { k: 'include'; source: string }

type Markup = { inline: InlineNode[] } | { blocks: BlockNode[]; flush?: true }
type InlineNode = { k: 'text' | 'space' | 'stmt' | 'embed' | 'label' /* … */ } // text: prose?, space: line?
type BlockNode = { k: 'par' | 'list' | 'enum' | 'terms' | 'stmt' | 'lines' /* … */ }
type StmtNode = { k: 'set' | 'show' | 'let' | 'let-pattern' | 'import' | 'expr' /* … */ }
```

The printer reads only own fields of a node, so a field that a polluted `Object.prototype` holds
never becomes code. Generated runtime tables are frozen copies without a prototype for the same
reason.

### 1.2 Typed public surface

- `Expr<T>`: a code expression whose Typst type is one of `T` (a union of type names). The brand is
  covariant, so `Expr<'length'>` is assignable to `Relative = Expr<'length' | 'ratio' | 'relative'>`.
- `Value<T>`: an `Expr<T>` with the methods of type `T` when `T` is one type (`c.update(2)`,
  `datetime.today().display(…)`). `Content` is `Value<'content'>`. `Expr<any>` and unions have no
  methods; `assume<T>()` narrows them.
- `Inline`: markup inside a line. `Block`: markup on its own lines. `Stmt`: a statement.

All methods live on one shared prototype, by name, because Typst picks a method from the type of
the value at run time. The module `gen/std` installs them. It is the one module with a side effect;
every other generated top-level call is `/* @__PURE__ */`, so a bundler drops what is not used.

### 1.3 Values built from typed input

| Typst            | API                                                                    | Prints                  |
| ---------------- | ---------------------------------------------------------------------- | ----------------------- |
| length, ratio    | `pt(12)`, `mm(2)`, `cm(1)`, `inches(1)`, `em(1)`, `pct(50)`            | `12pt`, `50%`           |
| fraction, angle  | `fr(1)`, `deg(90)`, `rad(1)`                                           | `1fr`, `90deg`          |
| relative, stroke | `add(mm(2), pct(10))`, `add(pt(0.5), gray)`                            | `2mm + 10%`             |
| color            | `rgb('#A0AEC0')`, `rgb(255, 0, 0)`, `luma(50)`, constants (`black`…)   | `rgb("#A0AEC0")`        |
| alignment        | `left`, `top`, `add(left, top)`                                        | `left + top`            |
| dictionary       | a plain object (keys become kebab-case), `dict({…})` (keys as written) | `(top-edge: 1pt)`       |
| data             | `data(json)`: every key quoted; only what `JSON.parse` makes           | `("any key": 1)`        |
| array            | a JS array where a value goes, `data([…])` anywhere                    | `(a, b)`, `(a,)`        |
| content          | `string`, `Inline`, `Block`, `Content`, arrays (one sequence)          | depends on the mode     |
| label            | `label('fig')`                                                         | `<fig>`, `label("…")`   |
| none / auto      | `null` / `auto` (an exported constant, never the string `'auto'`)      | `none` / `auto`         |
| function         | a function of the bindings, a `define`, a JS function (a closure)      | `text`, `it => …`       |
| file             | `path('literal')`, `unsafePath(p)`                                     | `"a.png"`, `path("…")`  |

`rgb(hex)` checks the hex digits at run time and prints them as written. `add`, `minus`, `times`,
`div` and `neg` have overloads that follow Typst's rules: length plus ratio is relative, length plus
color is a stroke, two alignments make a 2D alignment, content joins content and strings. Numbers
are typed loosely: an int expression or a literal without a fraction makes an int, other numbers
`int | float`, and decimals mix with ints. A pair that Typst rejects may type-check; Typst reports it.

## 2. Mapping Typst's types to TypeScript (generated)

| Reflected input                          | TS                                                            |
| ---------------------------------------- | ------------------------------------------------------------- |
| `length`, `relative`, `color`…           | `Expr<'…'>`, `Relative`                                       |
| `int` / `float`, `bool`, `str`           | `number`, `boolean`, `string`, or an `Expr` of the type       |
| `content`                                | `ContentArg`                                                  |
| `none` / `auto`                          | `null` / `Auto`                                               |
| a value `"italic"` in a union            | the literal `'italic'` (or `Expr<'str'>`)                     |
| `dictionary`, `array`, `function`        | a shape from the overlay, else a generic dictionary or array  |
| `any`, a union                           | `TypstValue`, a TS union                                      |

TS names are camelCase (`topEdge`) and print as kebab-case (`top-edge`) through a generated table.
Typst's documentation becomes JSDoc. JS reserved words get a trailing underscore (`enum_`). Types
export their constructor and their scope (`str.len(s)`), modules are objects (`calc.abs`), and
methods come from the scope by dropping `self`.

- Calling convention: `f(named?, ...positionals)`. Named arguments come first, as one object, and
  print in the order of the signature. A plain object first is named arguments when its keys are
  parameter names and the required positionals are still given (`json.encode({ pretty: true })`
  encodes the object). Objects from outside go through `data()`.
- Named objects are exact (`Exact<O, N>`): extra and computed keys do not compile.
- A contextual function (`here`, `counter.get`, `measure`) takes a `Ctx` token first. Only
  `context(ctx => …)` and show callbacks give one, so a call outside a context does not compile.

### 2.1 The overlay

`spec/overlay.ts` adds what reflection does not give. Each flag patch states the reflected values it
expects; if an upgrade changes them, or an entry names nothing in the spec, generation fails.

- `exclude`: `eval` and `plugin`, which would turn data into code, and `rgb`, `luma`, `label`, `path`
  and `read`, which `values.ts` writes by hand.
- `params`: flag corrections (`text.body` is positional and required), hidden parameters, fields
  only (`text.text`), and shorthands that are no fields (`pad.rest`).
- `shapes`: TS types for dictionaries, arrays and callbacks (`inset`, `margin`, `stroke`, `font`,
  grid tracks, cell callbacks), with flags for callbacks that return content (`numbering`,
  `list.marker`, `layout`) and parameters where a JS array is a sequence.
- `variants`, `values`, `returns`, `contextual`, `deprecatedSymbols`, `openNamed`: alternative
  signatures (`cmyk(color)`), constants reflection does not dump (`calc.pi`, `sys.inputs`, color
  maps), narrower result types, functions that need context, symbols to leave out, and functions
  that take named arguments of any name (`function.with`).

A set rule takes a parameter when `settable ∨ (named ∧ ¬positional ∧ ¬required ∧ ¬variadic)`, so
named shorthands (`block.spacing`, `pad.x`) are settable. `where` and `it.…` take the element's
fields: positional, settable, required or variadic parameters, not shorthands.

## 3. Modes

The position of a node decides its mode. The user cannot choose the wrong one.

| Node \ position          | In markup                | In code                 |
| ------------------------ | ------------------------ | ----------------------- |
| `string`                 | escaped text (§7.2)      | `"…"` (§7.1)            |
| `Expr<T>` (call, ident…) | `#expr`, plus `;` (§7.3) | `expr`                  |
| `Inline` / `Block`       | as is                    | `[…]`                   |
| `Stmt`                   | `#set …` on its own line | `set …` in a code block |
| `unsafeRaw.markup`       | `#[…]` (§8)              | `[…]`                   |

Type rules, each with a type test (`@ts-expect-error` in `test/types.test-d.ts`):

- `inline(…)` takes no `Block`: a list or `blocks(…)` there does not compile.
- A parameter that is neither `content` nor `str` rejects `string`, `Inline`, `Block` and `Content`.
- A file parameter rejects a `string`. It takes `path('literal')`, `unsafePath(p)`, bytes or any
  Typst value; at run time a JS string (also in an array) throws, except names the parameter takes
  (`bibliography({ style: 'apa' })`). This guards against mistakes, not data: `--root` confines files.
- The names of `let_`, `define` and `external`, and the paths of `path`, `includeFile` and
  `importFile`, are literal types (`Literal<N>`), not `string` or a template literal type. At run
  time names are checked as Typst identifiers that are not keywords, again where they print.

## 4. Composing content

```ts
inline('Prepared by ', strong(author), '.') // parts joined with no separator
inline`Thank you, ${strong(name)}.` // the same, as a template
blocks(paragraph1, paragraph2) // a blank line between parts
doc(set(text, { size: pt(11) }), heading('Report'), table) // a document; same as blocks
```

- `false`, `null` and `undefined` in markup and in lists print nothing, so `cond && x` works. As an
  argument, `false` and `undefined` are empty content and `null` is `none`; a trailing `undefined`
  leaves an optional argument out.
- An array as content is one sequence: its inline parts join into one paragraph, and only its blocks
  break it. Separate arguments of `doc` and `blocks` are separate paragraphs.
- The text of an `inline` template is text, never Typst. A line break with the spaces around it is
  one space, so prose can span lines of the TypeScript file; next to CJK characters or a value it is
  a `lineSpace` (a line break in the source). A value that prints nothing takes the template's
  spaces around it with it.
- `space` is a markup space, which collapses and is trimmed at the edges of a paragraph. `' '` in
  data stays exactly.
- Data (strings, values) shows exactly. An `inline` template's own text, `prose(value)` and
  `prose.paragraphs(value)` get Typst's typography: smart quotes, `--` and `---` dashes, `...` an
  ellipsis. Only the program knows which data is prose, and typography would change a code
  (`REF--2024`) without notice.
- `m.list`, `m.enum` and `m.terms` take items: strings, markup, `m.item(body, …children)`,
  `m.numbered(n, …)` (enum only), `m.term(term, description)` (terms only). `{ tight: false }` puts a
  blank line between items. Each child of an item is a new paragraph, except a nested list right
  after a tight item's text. `m.lines(…)` puts blocks on consecutive lines; as an item's body it
  continues the item's text.
- `labelled(x, lbl)` attaches a label. Text, or content that shows nothing, goes in a content block
  of its own (`#[Text]<lbl>`): Typst splits text into several elements, and the label would go on
  the last one.
- `contentBlock(x)` is content as a value, `[…]`, so block content can go inside a line.

Inline formatting uses calls (`#strong("…")`), never `*…*` or `_…_`, which depend on word
boundaries and the surrounding characters.

## 5. Rules and scripting

```ts
set(text, { size: pt(10), lang: 'en' }) // #set text(size: 10pt, lang: "en")
set(page, { width: pt(200) }, { if: wide }) // #set page(width: 200pt) if wide
show(where(heading, { level: 1 }), set(text, { size: pt(16) }))
show(heading, (it, ctx) => block({ below: em(1) }, it.body)) // it: the element's fields, typed
show(template.with({ title: 'Report' })) // #show: template.with(title: "Report")
```

- `set(E, fields)` takes the settable fields of an element function, with exact keys.
- `show(selector, replacement)`: the selector is an element function, `where(E, fields)`, a label,
  a string, `regex(…)` or a selector method (`where(…).or(figure)`). The replacement is content,
  a `set(…)` or a callback that gets `it` and the context token.
- `where` takes fields that are not content (`level`, `kind`); a content field throws. Typst
  compares content by how it is built, which the library cannot know: such a selector is `unsafeRaw`.
- `let_('total', 42)` returns `[stmt, ref]`; the reference has the type of the value.
  `let_(['cover', null], f())` destructures (`null` is `_`).
- `call(f, { named }, …positional)` calls a function value only Typst knows and returns `Expr<any>`.
  A field that holds a function prints in parentheses (`(it.kind)(x)`).
- `context(ctx => …)` prints `context …`. `codeBlock([stmts…], value)` prints `{ set …; value }`.
- `importPackage(spec, [names])`, `importFile('x.typ', [names])`, or a module in place of the list
  (`import "…" as m`); `includeFile('x.typ')`. `external('name', module?)` names a value the
  document does not bind (`Expr<any>`); it cannot name `eval` or `plugin`.
- `spread(values)` is `..values`, only where a function takes variadic arguments.
- `assume<T>(e)` asserts a type for TypeScript only. The output does not change, and a false
  assertion is a Typst error, never a way for data to become code.
- A label is `<name>` in code when the name is ASCII label syntax, else `label("…")`. In markup only
  ASCII label syntax attaches.

### 5.1 Callbacks

A JS function becomes a Typst closure. The library calls it once, with references to the
parameters, and prints what it returns.

- One parameter prints as `it`, more as `_1`, `_2`…, which `let_` and `define` reject, so a
  parameter never hides a binding the callback reads. Nested closures add a suffix (`it2`, `_1_2`).
- Typst may pass more arguments than the callback names (a cell callback gets `x` and `y`), so the
  closure ends with a sink: `(it, .._0) => …`, or `..` for a show callback. The JS function gets the
  sink after its parameters; a rest parameter holds it as one value that only spreads
  (`(...nums) => numbering('1.a', ...nums)`).
- A parameter is `Expr<any>` or the type a shape gives it. It is an object, so it is always truthy
  in JS, and a parameter with a default value gets the sink instead. Give callbacks no defaults.
- Where a callback returns content (show rules, `numbering`, `layout`), a returned array is a
  sequence and `false` is empty content. An async function throws.

### 5.2 Names the document binds

The document can bind a name of the standard library (`#let title = …`), as in Typst, and the types
cannot follow what each name means. So the printer first collects every name the document binds
(`let`, parameters, closure parameters, imports) and prints the library's definition of such a name
as `std.title`. Only `std` cannot be bound. The variables of an `unsafeRaw` snippet do not count.

## 6. Functions the document defines: `define`

```ts
const card = define('card')
  .pos('name', T.content)
  .named('note', T.content, []) // a typed default value
  .named('font-size', T.length, pt(10)) // declared with its Typst name, passed as fontSize
  .body(({ name, note, fontSize }) => block({ inset: mm(3) }, text({ size: fontSize }, [strong(name), note])))

card.decl // #let card(name, note: [], font-size: 10pt) = block(…)
card({ note: 'vs Q2' }, 'Growth') // card([Growth], note: [vs Q2])
```

- `.pos` sets the positional order; `.rest('items', T.any)` is `..items`; `.returns(T.int)` makes
  the body a value instead of content. The caller is typed from the builder. With `..rest`, the
  named object takes any key, and the extra keys go into the sink.
- `T` has `content`, `str`, `int`, `float`, `bool`, `length`, `relative`, `color`, `label`, `path`,
  `bytes`, `any`, `nullable(t)`, `orAuto(t)` and `oneOf('a', 'b')`.
- Typst converts a string to content only for its own elements. So a JS string for a `T.content`
  parameter goes as `[…]`, and `null` as `[]`.
- `T.oneOf('apa', 'ieee')` takes only those names, in the types and at run time. The body can pass
  the value where Typst reads any other string as a file (`bibliography(style: …)`).
- `.with({…}, …positional)` returns a function value. `.external(module?)` declares a function that
  a `.typ` file or a package defines: the same typed caller, no body, strings passed as they are.

## 7. Printer

The printer is deterministic: the same input gives the same bytes. Values nest at most 256 levels
and code at most 250, below the limit of Typst's parser; deeper input fails with a clear error.

### 7.1 String literals

- `\` becomes `\\` and `"` becomes `\"`.
- U+0000–U+001F, U+007F, U+0085, U+2028 and U+2029 become `\u{…}` in lowercase hex, `\n`, `\r`
  and `\t` included, so a literal never puts a line break in the source.
- A lone surrogate throws a `TypeError`, here, in markup text and in `data()`: Typst cannot
  represent it.

### 7.2 Text in markup

An escape is an element of its own in Typst (`a\-b` is three elements), which word counters,
packages that read text and the tagged PDF see. So the printer escapes a character only where it
means something:

- Always: `` \ # $ * _ ` @ ~ ' " ``. Escaped quotes avoid smart quotes, so data stays literal.
- `[` and `]`: unless the brackets of the text pair up, as in a content block.
- `<`: unless a space follows (a label, or a shorthand such as `<-`).
- `-`: as a list marker at the start of a line, before `-` or `?` (shorthands), and before a number
  where a token starts (after a space, `:`, a bracket or an escape), where it is a minus sign.
- `=` and `+`: at the start of a line, before a space or the end (a heading or an enum marker).
- `/`: at the start of a line (a term), before `/` or `*` (a comment), and at the end of the text.
- `.`: next to another `.` (an ellipsis), and after leading digits at the start of a line, before a
  space or the end (`1.`, an enum marker).
- `{`, `}` and `>` mean nothing in markup and are never escaped.
- Control characters and line breaks become `\u{…}`, so text never puts a line break in the source.
  A space at an edge, next to a markup space or after another space becomes `\u{20}`, because Typst
  collapses and trims spaces. Other whitespace becomes `\u{…}`.
- Prose keeps its quotes and its `--`, `---` and `...` runs, for Typst's typography. A run counts
  only when all of it is prose; data next to it with the same character stays escaped.

The start of a line includes text after leading spaces. Adjacent texts are escaped as one run, so
`1` and `.` from two strings are still seen as `1.`.

### 7.3 Code in markup

- An expression in markup is `#` plus the expression. If the next character is not whitespace or a
  label, `;` follows: `#f("C")[x]` would take `[x]` as an argument, and an identifier would continue
  with letters, `-` or `_`.
- After `#`, Typst reads one call chain or literal. An expression that is not an identifier, field,
  call, string, content block, code block, snippet, raw code or `include` (or `context` of one of
  these) prints in parentheses: `#(-1pt)`, `#(a + b)`, `#(50%)`.
- `include` reads past spaces, so it ends with `;` when something follows.
- A statement in a line ends with `;` and applies to the rest of the block or document, as on its
  own line: `A #set text(fill: red); B`. An equation needs no `#`.

### 7.4 Numbers

- A JS number is an int when it is a safe integer, else a float, unless the parameter takes only
  one of them. A `bigint` is a 64-bit int; `-2^63` prints as `(-9223372036854775807 - 1)`.
- A float prints in the shortest form that round-trips, with `.0` when it is integral, and may have
  an exponent (`1e-7`). A value keeps all its digits: it is data.
- A value with a unit has 15 significant digits and no exponent (`1e-3pt` is no literal): `246.2mm`,
  not `246.20000000000002mm`. A number shown as text also has 15 significant digits, and a negative
  one has a minus sign (U+2212), as Typst shows `#(-5)`.
- `NaN` and `Infinity` throw.

### 7.5 Layout

- A call, array or dictionary goes on one line if it fits in 80 columns. Otherwise each item goes on
  its own line, indented by 2, with a trailing comma. Past 16 levels of indentation, values stay on
  one line.
- In code, inline content is `[…]` with no padding, because `box[⏎ hi⏎]` adds spaces. Block content
  is `[`, the blocks indented one level, then `]`. Content of one paragraph prints as a line. A
  `parbreak()` of the standard library at an edge of block content prints as a blank line.
- A JS string where content goes in code prints as a `"…"` literal, which Typst shows as text. The
  last positional content argument prints as a trailing block when it is markup: `block(inset: 3mm)[…]`.
- One blank line separates blocks; consecutive statements have none. A block that prints nothing
  leaves no line. There is no trailing whitespace, and the file ends with one `\n`.

### 7.6 Lists and headings as calls

The printer writes no line-level markup syntax (`=`, `-`, `+`, `/ `). A list prints as its items,
one element call each, which is the content that markup makes:

```typst
#list.item[Paid by card]
#list.item[Shipping
  #list.item[Express]]
#enum.item(3)[Third]
#terms.item([Typst])[a typesetting system]
```

- A tight list puts each item on the next line; a wide list puts a blank line between items. The
  item's body starts right after `[`, so no space appears at its edges.
- Typst groups adjacent items of a kind into one list, as it groups markup items. So show rules on
  `list.item` apply, and two lists of a kind with nothing between them are one list, as in markup.
- A heading is a call of `heading` (`== Title` is `heading(depth: 2, …)`). A heading alone in a
  content block starts right after `[`, so the content is the heading and a label attaches to it.

The printer keeps no state across blocks for lists or headings: what they mean is Typst's decision.

## 8. The escape hatch: `unsafeRaw`

```ts
unsafeRaw.code`page.width - 2cm` // (page.width - 2cm)
unsafeRaw.code({ banner: strong(title) })<'content'>`if it.level == 1 { banner } else { it }`
unsafeRaw.markup({ name })`Dear #name,` // #[#let name = "…"⏎Dear #name,]
unsafeRaw.math`x^2 + y^2 = r^2` // $x^2 + y^2 = r^2$; unsafeRaw.math.block prints $ … $
```

- The text is a template literal with no `${…}`, which the types enforce. At run time the library
  also checks that the template array is frozen with a frozen, non-enumerable `raw`: a tripwire for
  untyped code, not a proof. The text is read raw, except the escapes `\\`, `` \` `` and `\${`.
- Values enter only as named variables, each printed as `let name = …` before the snippet. A name is
  inert in markup and a reference in code, so data never becomes code.
- A variable's name can be bound (§5.2), is no global of the standard library (`text`) and appears
  in the text. Its value may not name another variable of the snippet. A variable that already has
  its name (`{ it }`, a parameter of the enclosing `define`) prints no `let`. In `unsafeRaw.math`, a
  variable may not have a math name (`pi`); in markup and code a `$` is often a price, so that check
  does not apply there.
- Code prints as `(src)`, or `{ let …; (src) }` with variables, without the indentation its lines
  share. Math prints as `$src$` or `$ src $`; the tag decides, not the spaces of the text.
- A snippet that ends with a line comment ends with a line break wherever the printer writes after
  it; one that ends with an odd number of backslashes gets a space.

### 8.1 The rule for markup snippets

`unsafeRaw.markup` returns content and prints as a content block of its own wherever it goes: `[`,
its variables (one `#let` per line), its text as written, `]`. Its own set and show rules end with
it, as its variables do; rules for what follows are `set` and `show`. A snippet of several lines that
prints no `#let` starts on a line of its own, so that its first line has the indentation of the
others. Its lines are not indented again, which would change a string or raw text that spans lines.

The one exception: a snippet given no variables, alone in a paragraph at the top of the document,
prints as written, so its definitions and rules apply to the rest, as typed in the file.

The template's opening and closing line breaks, and the indentation that all its lines share, are
dropped. A template that starts on the backtick's line keeps its lines as written.

## 9. Generation pipeline and version

```
tools/reflect (Rust, typst = "=0.15.1", Cargo.lock, pinned Docker image)
   └─ pnpm reflect ─▶ spec/typst-0.15.1.json                  (committed)
spec/overlay.ts ─┴─ pnpm gen ─▶ src/gen/std.ts, src/gen/sym.ts   (committed)
```

- The generated header carries the Typst version and the sha256 of the spec. Generated code is
  mostly data, a signature type and a runtime table per function; one runtime in `element.ts`
  (`func`, `typeCtor`, `installMethods`) turns calls into nodes. Edit the generator or the overlay,
  never `src/gen/`.
- The whole standard library is generated except the `exclude` list. Symbols and emoji
  (`sym.arrow.r.double`) are typed properties, without deprecated variants.
- `typst-version` names the one Typst version. `typst().checkVersion()` in the `node` entry point fails
  when the installed binary differs, and the tests call it first. `versionGuard()` prints
  `#assert(sys.version == version(0, 15, 1), …)`, so the document fails with another binary.
- `typst(options)` in the `node` entry point holds the options and has the commands of the CLI it
  needs: `compile` (from stdin; the PDF, or the diagnostics with the line of the printed source each
  points at), `eval` (an expression in the context of the document, as JSON; it prints as code like
  any value, so Typst code there comes from `unsafeRaw`; `typst query` is deprecated for it), and
  `version`/`checkVersion`. The commands share one runner (timeout, signal, process-group kill,
  clean-up); options given to a command replace the shared ones, so a query and a compile can use one
  `root`. A command takes a document, or `{ source }` for printed source. Other outputs (PNG, SVG,
  pages) are for the `typst` CLI.
- Typst `a.b.c` is package version `a.b.(c × 100 + r)`, where `r` counts the library's releases for
  that Typst version: an ordinary version, so it sorts and ranges work. `docs/upgrading-typst.md`
  gives the steps for a new Typst version.
- Checks: `pnpm typecheck && pnpm format:check && pnpm gen:check && pnpm test && pnpm build`.
  `pnpm test:package` type-checks a project that uses the packed package with several TypeScript
  versions and module settings.

## 10. Test oracles

- **Printer** (`test/printer.test.ts`, `test/escape.test.ts`): each syntax rule. Fast-check writes
  arbitrary strings as `#metadata("…") <sN>`, many per file, and `typst eval` reads them back with
  `query`; the result must equal the input.
- **Injection** (`test/injection.test.ts`, `test/fuzz.test.ts`): hostile and random strings
  (`#x @y $z$ *b* _e_ [x] <l> \ "q"`, `//`, `1. `, `- `, `= `, `...`, control characters) in every
  position (body, heading, items, cells, `strong`, `link`, a `define`'s body, `metadata`). A Typst
  extractor (`test/helpers/plain.typ`) reads back the text each block shows; it must equal the input.
- **Types** (`test/types.test-d.ts`, `test/arithmetic.test-d.ts`): a type test for each rule of §2
  and §3, and, written from Typst, every pair of kinds the arithmetic helpers take.
- **Positions** (`test/positions.test.ts`): kinds of values in many positions. Each case the types
  accept must compile without an error or a warning, except values Typst rejects with a clear error.
- **Bindings** (`test/wiring.test.ts`, `test/bindings.test.ts`): every generated function gets a
  value of each type Typst reflects for each parameter, in calls, set rules and `where`, and every
  symbol compiles. Typst must report no unexpected or missing argument and no unknown field.
- **Documentation and bundles:** every TypeScript block of `llms.txt` runs, the README's example
  prints what the README shows, and a browser bundle keeps the methods of values within a size budget.
- The test helper fails on Typst's warnings, so the printer writes no form that Typst phases out.

### 10.1 Corpora with byte-identical PDFs

`scripts/convert-suite.ts` converts real documents into TypeScript that uses the library, from the
syntax tree of Typst's own parser. Where the API has no form (math, loops, some template code), it
writes an `unsafeRaw` snippet at the smallest expression or statement and records why.
`scripts/check-converted.ts` type-checks each conversion, compiles it and the original with
`--creation-timestamp 0`, and requires byte-identical PDFs, which also covers links, bookmarks,
metadata and the tagged structure. A conversion that warns where its original does not fails.

- **Typst's suite** (`test/suite/`): the 2,380 cases of Typst 0.15.1's `tests/suite` that produce a
  PDF or only run code and expect no error, compiled with `typst-dev-assets` and the runner's
  helpers, as Typst's runner does. 2,376 pass.
- **Typst Universe** (`test/universe/`): 709 templates under permissive licenses, pinned in
  `packages.json`, each compiled in its own template project. 707 pass.
- Each corpus lists its failures, with the cause and the evidence, in `known-failures.ts`; the check
  fails when the result differs from the list. Three suite cases compare the whitespace and comments
  of markup, which the conversion does not keep; one spreads arguments into a set rule
  (`#set line(..args)`), which `set` cannot write.

## 11. Deliberate limits

- No `if`, `for` or `while` DSL, and no comparison or logic helpers: they belong to code that runs
  in Typst. Use TypeScript to build the document, or `unsafeRaw`.
- `where` takes no content field (§5). Values only Typst knows are `Expr<any>`; `assume<T>()`
  narrows one.
- The types are the checks. From untyped code or through a cast, some run-time checks still throw,
  but a call the types reject may print a document that Typst rejects, and a forged template array
  can get past the `unsafeRaw` tripwire.
- The library is no sandbox. It escapes data; what files a document reads, and its time and memory,
  depend on how Typst runs (`--root`, a timeout). See `SECURITY.md`.
- Names printed from data (named-argument keys, labels in markup) are ASCII, because JS knows a
  newer Unicode than Typst. A dictionary key that is no ASCII identifier prints as a string.
- Data spaces on both sides of a statement in a line collapse into one, as in Typst markup.
- A number in markup shows as JS formats it, so a large one has an exponent (`1e+21`).
- The bindings target exactly one Typst version.
