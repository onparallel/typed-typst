# typed-typst

Type-safe TypeScript for writing [Typst](https://typst.app) source code. You
build a document from typed function calls; the library prints the Typst
source. Data you pass in is escaped and does not become code (outside the
`unsafeRaw` escape hatch; see [SECURITY.md](SECURITY.md)), and most mistakes are
TypeScript compile errors instead of broken documents.

> **Note:** the code, the tests and the docs were written by an AI coding
> agent, directed and reviewed by a person. The test coverage is broad: unit,
> type and property-based injection tests, plus Typst's own test suite and
> 707 Typst Universe templates rebuilt with the library down to byte-identical
> PDFs. And it has had a security review; its findings are fixed or documented
> as limits (see [SECURITY.md](SECURITY.md)).

```ts
import { doc, set, page, text, mm, pt, m, inline, strong, table, fr, auto, render } from 'typed-typst'

const customer = 'ACME <script>#panic()</script>' // untrusted data
const items = [{ name: 'Widgets *x2*', price: '$40' }]

const source = render(
  doc(
    set(page, { paper: 'a4', margin: mm(20) }),
    set(text, { size: pt(11) }),
    m.heading(1, 'Invoice for ', customer),
    inline`Thank you, ${strong(customer)}.`,
    table({ columns: [fr(1), auto] }, ...items.flatMap((i) => [i.name, i.price])),
  ),
)
```

prints

```typst
#set page(paper: "a4", margin: 20mm)
#set text(size: 11pt)

= Invoice for ACME \<script>\#panic()\</script>

Thank you, #strong("ACME <script>#panic()</script>");.

#table(columns: (1fr, auto), "Widgets *x2*", "$40")
```

Compile the result with the `typst` CLI (or any Typst compiler) as usual. In
Node, `check(document)` from `typed-typst/node` does it for you: it compiles
with the `typst` binary and returns the PDF, or Typst's errors and warnings
with the line of the printed source they point at.

## What this project is about

- **Generating Typst from programs.** Reports, invoices, certificates,
  letters, papers: any document whose content comes from data.
- **Data never becomes code.** Every string is escaped for the position it
  goes to (markup, string literal, dictionary key, label). Typst code only
  comes from the API, or from the one explicit escape hatch, `unsafeRaw`,
  whose text must be a literal template and whose values enter only as
  named variables. A lint rule enforces the form.
- **Mistakes are compile errors.** Named arguments, their types, which
  arguments a `set` rule takes, which fields `it` has in a `show` rule,
  which functions need `context`: all checked by TypeScript.
- **The whole standard library, generated from Typst itself.** The bindings
  come from a reflection dump of Typst's own definitions (`spec/`), pinned to
  one Typst version (0.15.1), plus a small hand-written overlay. Every
  function, element, type, method, symbol and emoji is there.
- **Files are chosen by code, not by data.** Where Typst reads a file
  (`image`, `bibliography`, `read`…), only `path('literal')` is accepted.
  A string can never become a path.
- **Deterministic output.** The same input always prints the same source,
  formatted to 80 columns.
- **Verified against real documents.** The test suite rebuilds Typst's own
  test suite (2,377 of the 2,380 cases that produce a PDF and expect no
  error) and 707 of 709 published Typst Universe templates (papers, theses,
  CVs, letters) with the library, and requires the PDF to be byte-identical
  to the original's. It also type-checks every conversion. The few cases
  that do not pass are listed in code, with the reason, in each corpus's
  `known-failures.ts`. See [test/suite/README.md](test/suite/README.md) and
  [test/universe/README.md](test/universe/README.md).

## What this project is NOT about

- **Not a Typst compiler or renderer.** It produces source text. Rendering is
  Typst's job (CLI, `typst.ts` in the browser, a service…).
- **Not a replacement for writing Typst by hand.** Templates, packages and
  hand-written documents are better written in Typst. Use the library where
  a program assembles the document, and import your `.typ` templates from it
  (`importFile`, `importPackage`, `define(…).external()`).
- **Not a control-flow DSL.** There is no typed `if`, `for` or `while`. Use
  TypeScript's own control flow to build the document, or `unsafeRaw` for the
  rare loop that must run inside Typst.
- **Not a parser or a Typst-to-TypeScript converter for users.** The
  converter in `scripts/` exists to test the library against existing
  documents. It is not a supported tool.
- **Not multi-version.** The bindings target exactly one Typst version.
  `checkTypstVersion()` (from `typed-typst/node`) and `versionGuard()` catch a mismatch instead of
  producing documents that fail in subtle ways.
- **Not a full type checker for Typst.** Values whose type only Typst knows
  (a field Typst computes, a function from a package) are `Expr<any>`. You
  can narrow them with `assume<T>()`, which is greppable and changes nothing
  in the output.

## Concepts

| You write                                                                        | Typst                                                     |
| -------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `doc(…)`, `inline(…)`, `blocks(…)`                                               | a document, a line of markup, block content               |
| `m.heading(2, 'Title')`, `m.list(…)`, `m.enum(…)`, `m.terms(…)`                  | `== Title`, `- …`, `+ …`, `/ term: …`                     |
| `strong('x')`, `table({ columns: 2 }, 'a', 'b')`                                 | `#strong("x")`, `#table(columns: 2, "a", "b")`            |
| `set(text, { size: pt(11) })`                                                    | `#set text(size: 11pt)`                                   |
| `show(where(heading, { level: 1 }), (it) => …)`                                  | `#show heading.where(level: 1): it => …`                  |
| `let_('total', 42)`                                                              | `#let total = 42` (returns the statement and a reference) |
| `define('card').pos('name', T.content).named('note', T.content, []).body(…)`     | `#let card(name, note: []) = …`, with a typed caller      |
| `context((ctx) => counter(page).get(ctx))`                                       | `#context counter(page).get()`                            |
| `labelled(figure(…), label('fig'))`, `ref(label('fig'))`                         | `#figure(…)<fig>`, `#ref(<fig>)`                          |
| `importPackage('@preview/pkg:1.0.0', [conf])`, `show(conf.with({ title: 'T' }))` | `#import …: conf`, `#show: conf.with(title: "T")`         |
| `spread(xs)`, `times([fr(1)], 3)`, `add(a, b)`, `div(a, 2)`                      | `..xs`, `(1fr,) * 3`, `a + b`, `a / 2`                    |
| `let_(['cover', null], f())`, `call(cover, …)`                                   | `#let (cover, _) = f()`, `#cover(…)`                      |
| `unsafeRaw.code({ lines })<'content'>` `` `lines.join(linebreak())` ``           | the snippet, after `let lines = …`                        |

Prose with elements in it reads best as an `inline` template, whose `${…}`
are elements or data:

```ts
inline`The source is in ${raw('refs.bib')}, cited as ${cite(label('knuth84'))}.`
```

### Data, templates and prose

Text reaches the document in one of three ways, as in Typst, where a string is
literal and only typed markup gets typography:

| You write                   | It shows                           | Use it for                                |
| --------------------------- | ---------------------------------- | ----------------------------------------- |
| a string, a `${value}`      | exactly the text: `don't -- 5'11"` | data: names, codes, measures, anything    |
| an `inline` template's text | as typed in Typst: `don’t – wait…` | the text you write in your code           |
| `prose(value)`              | as typed in Typst: `don’t – 5′11″` | data that is prose: a note, a description |

Typst's typography is smart quotes for the document's language (`“…”`,
`„…“`, `«…»`), `--` and `---` dashes and `...` an ellipsis; in `prose`, a line
break (with the spaces around it) is also a space, other spaces stay, and
`prose.paragraphs(value)` makes a blank line a new paragraph (block content).
None of it is syntax:
`*`, `#`, `=`, `@` and the rest are escaped in all three, so data never becomes
markup. Data is shown as it is by default because only you know which of it is
prose: typography would change a product code (`REF--2024` → `REF–2024`) or a
command (`npm run build -- --watch`) without anyone noticing.

```ts
const note = `Don't miss it -- open 9--17...` // from a database
inline('Note: ', note) // Note: Don't miss it -- open 9--17...
inline('Note: ', prose(note)) // Note: Don’t miss it – open 9–17…
```

Named arguments are camelCase (`columnGutter`) and always come first, as one
object. Values have the methods of their Typst type (`c.update(2)`,
`datetime.today().display('[year]')`). Binding a name of the standard library
(`let_('title', …)`) works as in Typst; the library's own `title` then prints
as `std.title`.

More in [docs/design.md](docs/design.md) and in
[examples/](examples/).

**For AI agents and LLMs:** [llms.txt](llms.txt) has the rules, a cheat sheet and
the common errors, in one page. It ships with the package, and its examples
are type-checked and run by the tests.

## Versions

The package version names the Typst version of the bindings: Typst `a.b.c`
is `a.b.(c × 100 + r)`, where `r` counts the releases of the library for
that Typst version. `0.15.100` is the first release for Typst 0.15.1, and
`0.15.101` the next one. Install the version that matches your Typst; a
range like `^0.15.100` also accepts later Typst 0.15 patch releases.
A release may change the library's API without changing Typst's version:
[CHANGELOG.md](CHANGELOG.md) says when it does.

## Development

Requirements: Node 22 or later, pnpm, and the `typst` CLI at the pinned version
(`typst-version`).

```sh
pnpm install
pnpm test           # unit, type, injection (property-based), snapshot and Typst round-trip tests
pnpm typecheck && pnpm lint && pnpm format:check
pnpm build
pnpm docs:api       # API reference in docs/api/ (the library, then the generated bindings)
pnpm test:package   # pack, install in an empty project, type-check with TypeScript 5.4 to 6
pnpm gen            # regenerate src/gen/ from spec/ (pnpm gen:check verifies it is up to date)
pnpm test:corpus    # Typst's test suite, byte-identical PDFs (fetches typst-dev-assets)
pnpm test:universe  # Typst Universe templates, byte-identical PDFs (fetches the templates)
```

Regenerating `spec/` from Typst's sources (`pnpm reflect`) needs Docker.
Moving to a new Typst version: [docs/upgrading-typst.md](docs/upgrading-typst.md).

| Path             |                                                                        |
| ---------------- | ---------------------------------------------------------------------- |
| `src/`           | the library (`gen/` is generated)                                      |
| `spec/`          | the reflection dump of Typst 0.15.1 and the overlay                    |
| `scripts/`       | the generator, and the tools that convert and check the corpora        |
| `tools/reflect/` | the Rust programs that dump Typst's definitions and syntax trees       |
| `test/`          | tests; `suite/` and `universe/` hold the corpora and their conversions |
| `examples/`      | example documents and their printed sources                            |

The library is under the MIT license ([LICENSE](LICENSE)). The corpus files under `test/suite/` come from Typst's repository
(Apache-2.0); those under `test/universe/` come from Typst Universe templates,
each under its own license (stated in each file).
