// Converted from test/universe/corpus/preprintx.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  dict,
  doc,
  em,
  external,
  figure,
  image,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  m,
  path,
  pct,
  ref,
  show,
  space,
  strong,
  table,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const preprintx = external('preprintx')
  const preprintx_with = define('with')
    .named('abstract', T.any, null)
    .named('affils', T.any, null)
    .named('authors', T.any, null)
    .named('correspondence', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(preprintx)
  return doc(
    importPackage('@preview/preprintx:0.1.0', [preprintx]),
    show(
      preprintx_with({
        title: 'My Beautiful Manuscript',
        authors: [
          ['Einstein, Albert', '1,✉'],
          ['Feynman, Richard', '1,2'],
          ['Planck, Max', '3'],
        ],
        affils: dict({
          '1': 'Institute for Advanced Study',
          '2': 'California Institute of Technology',
          '3': 'University of Berlin',
        }),
        abstract: lorem(100),
        keywords: [inline`astrophysics`, inline`relativity`, inline`black holes`],
        correspondence: 'einstein@relativity.com',
      }),
    ),
    m.lines(m.heading(1, 'Section'), inline(lorem(30))),
    m.lines(m.heading(2, 'Subsection'), inline(lorem(80))),
    m.lines(m.heading(3, 'SubSubsection'), inline(lorem(80))),
    inline(
      labelled(
        [figure({ caption: inline`My figure` }, image({ width: pct(50) }, path('fig.jpeg'))), space],
        label('fig1'),
      ),
    ),
    inline(lorem(100)),
    inline`A reference to ${ref(label('fig1'))}`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`My table` },
            table(
              { columns: 2 },
              inline(strong(inline`Text`)),
              inline(strong(inline`Number`)),
              inline`x`,
              inline`100`,
              inline`y`,
              inline(unsafeRaw.math`pi`),
            ),
          ),
          space,
        ],
        label('table1'),
      ),
    ),
    inline`A reference to ${ref(label('table1'))}`,
    inline`Some citations ${ref(label('maxwell1865dynamical'))}${ref(label('planck1901law'))}${ref(label('einstein1905relativity'))}`,
    inline`Some math: ${unsafeRaw.math`E=m c^2`}`,
    inline(lorem(400)),
    m.lines(
      m.heading(1, 'References'),
      inline(v(em(-3)), space, bibliography({ style: 'nature', title: '' }, path('refs.bib'))),
    ),
  )
}
