// Converted from test/universe/corpus/elsearticle.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  codeBlock,
  define,
  doc,
  external,
  figure,
  fr,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  lorem,
  m,
  path,
  pct,
  ref,
  show,
  space,
  strong,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const elsearticle = external('elsearticle')
  const subfigure = define('subfigure')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .named('caption', T.content, [])
    .named('columns', T.any, null)
    .named('label', T.any, null)
    .returns(T.any)
    .external()
  const appendix = external('appendix')
  const elsearticle_with = define('with')
    .named('abstract', T.any, null)
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('format', T.any, null)
    .named('journal', T.any, null)
    .named('keywords', T.any, null)
    .named('paper', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(elsearticle)
  const [abstractDecl, abstract] = let_('abstract', lorem(250))
  const [tab1Decl, tab1] = let_(
    'tab1',
    codeBlock(
      [],
      table(
        { columns: 3 },
        table.header(
          inline(strong(inline`Header 1`)),
          inline(strong(inline`Header 2`)),
          inline(strong(inline`Header 3`)),
        ),
        inline`Row 1`,
        inline`12.0`,
        inline`92.1`,
        inline`Row 2`,
        inline`16.6`,
        inline`104`,
      ),
    ),
  )
  return doc(
    importPackage('@preview/elsearticle:3.1.0', [elsearticle, subfigure, appendix]),
    abstractDecl,
    show(
      elsearticle_with({
        title: 'Title of the paper',
        authors: [
          { name: inline`A. Author`, affiliations: ['a', 'b'], corresponding: true, email: 'author@univa.edu' },
          { name: inline`B. Author`, affiliations: ['b'] },
        ],
        affiliations: { a: inline`University A, City A, Country A`, b: inline`University B, City B, Country B` },
        journal: 'Name of the Journal',
        abstract: abstract,
        keywords: ['keyword 1', 'keyword 2'],
        paper: 'a5',
        format: 'preprint',
      }),
    ),
    m.heading(1, 'Introduction'),
    inline(lorem(100)),
    m.heading(1, 'Section 1'),
    inline(lorem(50)),
    m.heading(2, 'Subsection 1'),
    inline`${lorem(10)} (see Eq. ${ref(label('eq1'))}) ${ref(label('Aut10'))}.`,
    inline`${labelled([unsafeRaw.math.block`y = alpha x + beta tau integral_0^x d x`, space], label('eq1'))}
where ...`,
    inline(
      labelled(
        [
          unsafeRaw.math.block`x = integral_0^x d x #<eqa>\\
  (u v)' = u' v + v' u #<eqb>`,
          space,
        ],
        label('eq2'),
      ),
    ),
    inline`Eq. ${ref(label('eqa'))} is a simple integral, while Eq. ${ref(label('eqb'))} is the derivative
of a product of two functions. These equations are grouped in Eq. ${ref(label('eq2'))}.`,
    m.heading(2, 'Features'),
    m.heading(3, 'Table'),
    inline`Below is Table ${ref(label('tab:tab1'))}.`,
    tab1Decl,
    inline(labelled([figure({ kind: table, caption: inline`Example` }, tab1), space], label('tab:tab1'))),
    m.heading(3, 'Figures'),
    inline`Below is Fig. ${ref(label('fig:logo'))}.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Typst logo - Credit: @fenjalien` },
            image({ width: pct(50) }, path('images/typst-logo.svg')),
          ),
          space,
        ],
        label('fig:logo'),
      ),
    ),
    m.heading(3, 'Subfigures'),
    inline`Below are Figs. ${ref(label('figa'))} and ${ref(label('figb'))}, which are part of Fig. ${ref(label('fig:typst'))}.`,
    inline(
      subfigure(
        { columns: [fr(1), fr(1)], caption: inline`(a) Left image and (b) Right image`, label: label('fig:typst') },
        figure({ caption: inline() }, image(path('images/typst-logo.svg'))),
        label('figa'),
        figure({ caption: inline() }, image(path('images/typst-logo.svg'))),
        label('figb'),
      ),
    ),
    show(appendix),
    m.heading(1, 'Appendix A'),
    m.heading(2, 'Figures'),
    inline`In Fig. ${ref(label('fig:app'))}`,
    inline(
      labelled(
        [figure({ caption: inline`Books cover` }, image({ width: pct(50) }, path('images/typst-logo.svg'))), space],
        label('fig:app'),
      ),
    ),
    m.heading(2, 'Subfigures'),
    inline`Below are Figs. ${ref(label('figa-app'))} and ${ref(label('figb-app'))}, which are part of Fig.
${ref(label('fig:typst-app'))}.`,
    inline(
      subfigure(
        { columns: [fr(1), fr(1)], caption: inline`(a) Left image and (b) Right image`, label: label('fig:typst-app') },
        figure({ caption: inline() }, image(path('images/typst-logo.svg'))),
        label('figa-app'),
        figure({ caption: inline() }, image(path('images/typst-logo.svg'))),
        label('figb-app'),
      ),
    ),
    m.heading(2, 'Tables'),
    inline`In Table ${ref(label('tab:app'))}`,
    inline(labelled([figure({ kind: table, caption: inline`Example` }, tab1), space], label('tab:app'))),
    m.heading(2, 'Equations'),
    inline`In Eq. ${ref(label('eq'))}`,
    inline(labelled([unsafeRaw.math.block`y = f(x)`, space], label('eq'))),
    inline(labelled([unsafeRaw.math.block`y = g(x)`, space], label('nonum-eq'))),
    inline(unsafeRaw.math.block`y = f(x) \\
y = g(x)`),
    inline(bibliography(path('refs.bib'))),
  )
}
