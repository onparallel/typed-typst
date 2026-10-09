// Converted from test/universe/corpus/scripst.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  datetime,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  fr,
  grid,
  importPackage,
  inline,
  label,
  let_,
  lorem,
  m,
  parbreak,
  raw,
  ref,
  show,
  space,
  sym,
  times,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const scripst = external('scripst')
  const countblock = define('countblock')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.content)
    .named('lab', T.any, null)
    .named('subname', T.content, [])
    .returns(T.any)
    .external()
  const cb = external('cb')
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const threeLineTable = define('three-line-table').pos('arg1', T.content).returns(T.any).external()
  const hbar = external('hbar')
  const dv = external('dv')
  const ket = external('ket')
  const scripst_with = define('with')
    .named('abstract', T.any, null)
    .named('author', T.any, null)
    .named('content-depth', T.any, null)
    .named('contents', T.any, null)
    .named('info', T.content, [])
    .named('keywords', T.any, null)
    .named('lang', T.any, null)
    .named('matheq-depth', T.any, null)
    .named('par-spacing', T.any, null)
    .named('preface', T.any, null)
    .named('template', T.any, null)
    .named('time', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(scripst)
  const [abstractDecl, abstract] = let_(
    'abstract',
    inline`${space}Scripst is a simple and easy-to-use Typst language template, suitable for various scenarios
such as daily documents, assignments, notes, papers, etc.${space}`,
  )
  const [prefaceDecl, preface] = let_(
    'preface',
    blocks(
      inline`Typst is a simple document generation language with syntax similar to lightweight Markdown markup.
Using appropriate ${raw('set')} and ${raw('show')} commands, you can highly customise the style
of your documents.`,
      'Scripst is a simple and easy-to-use Typst language template, suitable for various scenarios such as daily documents, assignments, notes, papers, etc.',
    ),
  )
  return doc(
    importPackage('@preview/scripst:1.1.3', [scripst, countblock, cb, proof, threeLineTable, hbar, dv, ket]),
    m.lines(abstractDecl, prefaceDecl),
    show(
      scripst_with({
        template: 'article',
        title: inline`Scripst Documentation`,
        info: inline`Article Style Set`,
        author: 'AnZrew',
        time: datetime.today().display(),
        abstract: abstract,
        keywords: ['Scripst', 'Typst', 'template'],
        preface: preface,
        contents: true,
        contentDepth: 3,
        matheqDepth: 2,
        lang: 'fr',
        parSpacing: em(0.9),
      }),
    ),
    m.heading(1, lorem(2)),
    inline`${countblock(
      { subname: inline(emph(inline`Fermat's Last Theorem`)), lab: 'fermat' },
      'thm',
      cb,
      blocks(
        parbreak(),
        inline`No three ${unsafeRaw.math`a, b, c in NN^+`} can satisfy the equation ${unsafeRaw.math.block`a^n + b^n = c^n`}
for any integer value of ${unsafeRaw.math`n`} greater than 2.`,
      ),
    )} ${proof(inline`Cuius rei demonstrationem mirabilem sane detexi. Hanc marginis exiguitas non caperet.`)}
Fermat did not provide proof publicly for ${ref(label('fermat'))}.`,
    m.heading(2, lorem(3)),
    inline(
      grid(
        { columns: times([fr(1)], 2) },
        inline(
          space,
          figure(
            { caption: inline`${raw('three-line-table')} table example` },
            threeLineTable(inline`${space}| Name | Age | Gender | | --- | --- | --- | | Jane | 18 | Male | | Doe | 19 | Female
|${space}`),
          ),
          space,
        ),
        inline(space, unsafeRaw.math.block`i hbar dv(, t) ket(Psi(t)) = hat(H) ket(Psi(t))`, space),
      ),
    ),
  )
}
