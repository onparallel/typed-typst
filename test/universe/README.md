# Typst Universe templates

Real documents (papers, theses, CVs, letters, a newsletter, books) from
templates published on Typst Universe (https://typst.app/universe), each
under its own license (MIT, MIT-0, Unlicense or Apache-2.0; see the header of
each file and `packages.json`). They test what Typst's own test suite does
not: whole documents that import a package, apply its template with
`show: template.with(…)` and include other files.

`packages.json` pins each template. `scripts/extract-universe.ts` creates
each template project with `typst init` in `.cache/universe/<name>/` (images,
bibliographies, included files), caches packages in `.cache/typst-packages`
(never in the user's cache), and copies the template's main file to
`corpus/<name>.typ`. The list has every template of Typst Universe under a
permissive license (MIT, MIT-0, Unlicense, Apache-2.0, 0BSD, BSD, ISC, CC0)
whose document compiles with Typst 0.15.1 as it is. It leaves out about 50 that
do not (published for an older Typst, they use APIs or syntax that changed:
ieee-monolith, tntt, tufte-memo…) and two whose document is not at the root of
the project (hhn-unitylab-thesis-template, toot).

The conversion and the comparison are the suite's
(`test/suite/README.md`), with `--universe`:

    ls test/universe/corpus/*.typ | tools/reflect/syntax.sh > universe.jsonl
    node scripts/convert-suite.ts universe.jsonl --universe
    node scripts/check-converted.ts --universe

Each document is compiled as it is, with no prelude, in its template project.
An imported function becomes `define(name)….external()`, with the parameters
that the document's calls use; another imported value becomes
`external(name)`. A `*` import, of a package or of a file of the project, lists the names
the document uses that the module exports (Typst reports the exports).

## Templates that do not pass

`known-failures.ts` lists them, each with its status, the cause, the
evidence and what would change it. `pnpm test:universe` fails when any other
template does not pass, when a listed one fails differently, and when a
listed one passes (then it is removed from the list).
