// Converted from test/universe/corpus/minimalyst-academic-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  blocks,
  blue,
  center,
  define,
  doc,
  em,
  heading,
  horizon,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  m,
  pct,
  rect,
  ref,
  set,
  show,
} from '../../../src/index.ts'

export default () => {
  const report = define('report')
    .pos('arg1', T.any)
    .named('authors', T.any, null)
    .named('cover-image', T.any, null)
    .named('date', T.any, null)
    .named('subtitle', T.any, null)
    .named('table-of-contents', T.any, null)
    .named('table-of-figures', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/minimalyst-academic-report:0.1.0', [report]),
    show((doc_2, ctx) =>
      report(
        {
          title: 'Academic Template',
          subtitle: 'A clean template for reports',
          authors: [
            { name: 'John Doe', number: '424242' },
            { name: 'Jane Doe', number: '424242' },
          ],
          tableOfContents: true,
          tableOfFigures: true,
          coverImage: rect(
            { fill: blue, width: pct(30), height: em(5), stroke: { dash: 'dashed' } },
            blocks(m.lines(set(align, { alignment: add(center, horizon) }), 'REPLACE THIS WITH YOUR IMAGE')),
          ),
          date: '02 April 2026',
        },
        doc_2,
      ),
    ),
    m.lines(
      m.heading(1, 'Soft'),
      m.heading(2, 'Close'),
      m.heading(3, 'Closest'),
      inline`${ref(label('hard'))}: ${lorem(80)}`,
    ),
    m.heading(2, 'Softest'),
    inline(lorem(80)),
    m.heading(2, 'Softest'),
    inline(lorem(80)),
    inline(labelled(heading({ depth: 1 }, inline('Hard')), label('hard'))),
    inline(lorem(80)),
    m.heading(2, 'Hardest'),
    inline(lorem(80)),
  )
}
