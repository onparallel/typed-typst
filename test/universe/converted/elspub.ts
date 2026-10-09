// Converted from test/universe/corpus/elspub.typ by scripts/convert-suite.ts — do not edit.
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
  const elspub = external('elspub')
  const mssp = external('mssp')
  const ccBy = external('cc-by')
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
  const elspub_with = define('with')
    .named('abstract', T.any, null)
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('journal', T.any, null)
    .named('keywords', T.any, null)
    .named('paper-info', T.any, null)
    .named('paper-type', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(elspub)
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
    importPackage('@preview/elspub:1.0.0', [elspub, mssp, ccBy, subfigure, appendix]),
    show(
      elspub_with({
        journal: mssp,
        paperType: null,
        title: inline`Foundations of geometric thought: From practical measurement to mathematical harmony`,
        keywords: ['Elsevier', 'Typst', 'Template'],
        authors: [
          {
            name: inline`S. Pythagoras`,
            affiliations: ['a'],
            corresponding: true,
            orcid: '0000-0001-2345-6789',
            email: 's.pythagoras@croton.edu',
          },
          { name: inline`M. Thales`, affiliations: ['b'] },
        ],
        affiliations: {
          a: inline`School of Pythagoreans, Croton, Magna Graecia`,
          b: inline`Milesian School of Natural Philosophy, Miletus, Ionia`,
        },
        abstract: lorem(100),
        paperInfo: {
          year: inline`510 BCE`,
          paperId: inline`123456`,
          volume: inline`1`,
          issn: inline`1234-5678`,
          received: inline`01 June 510 BCE`,
          revised: inline`01 July 510 BCE`,
          accepted: inline`01 August 510 BCE`,
          online: inline`01 September 510 BCE`,
          doi: 'https://doi.org/10.1016/j.aam.510bce.101010',
          open: ccBy,
          extraInfo: inline`Communicated by C. Eratosthenes`,
        },
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(100))),
    inline`${lorem(150)} (see Eq.${sym.space.nobreak}${ref(label('eq1'))}).`,
    inline`${labelled([unsafeRaw.math.block`c^2 = a^2 + b^2`, space], label('eq1'))} where ...`,
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
    inline`Eq.${sym.space.nobreak}${ref(label('eqa'))} is a simple integral, while Eq.${sym.space.nobreak}${ref(label('eqb'))}
is the derivative of a product of two functions. These equations are grouped in Eq.${sym.space.nobreak}${ref(label('eq2'))}.`,
    inline(lorem(50)),
    m.lines(
      m.heading(2, 'Section'),
      inline`${lorem(50)} ${ref(label('Tha600'))} ${ref(label('Pyt530'))} ${ref(label('Pyt520'))}.`,
    ),
    m.lines(m.heading(3, 'Subsection'), inline(lorem(50))),
    m.heading(1, 'Tables'),
    inline`Below is Table${sym.space.nobreak}${ref(label('tab:tab1'))}.`,
    tab1Decl,
    inline(labelled([figure({ kind: table, caption: inline`Example` }, tab1), space], label('tab:tab1'))),
    m.heading(1, 'Figures'),
    m.heading(2, 'Simple figure'),
    inline`Below is Fig.${sym.space.nobreak}${ref(label('fig:logo'))}.`,
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
    m.heading(2, 'Subfigures'),
    m.heading(3, 'Subfigures'),
    inline`Below are Figs.${sym.space.nobreak}${ref(label('figa'))} and${sym.space.nobreak}${ref(label('figb'))},
which are part of Fig.${sym.space.nobreak}${ref(label('fig:typst'))}.`,
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
    inline`${lorem(50)} (see Eq.${sym.space.nobreak}${ref(label('eq:app-eq1'))} and Fig.${sym.space.nobreak}${ref(label('fig:logo-app'))}).`,
    inline(labelled([unsafeRaw.math.block`y = x^2`, space], label('eq:app-eq1'))),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Typst logo - Credit: @fenjalien` },
            image({ width: pct(50) }, path('images/typst-logo.svg')),
          ),
          space,
        ],
        label('fig:logo-app'),
      ),
    ),
    inline(bibliography(path('refs.bib'))),
  )
}
