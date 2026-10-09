// Converted from test/universe/corpus/starry-ulfg.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, lorem, m, show } from '../../../src/index.ts'

export default () => {
  const starryUlfg = external('starry-ulfg')
  const appendix = external('appendix')
  const starryUlfg_with = define('with')
    .named('acknowledgment', T.content, [])
    .named('candidates', T.any, null)
    .named('course', T.any, null)
    .named('document-title', T.any, null)
    .named('professors', T.any, null)
    .named('title', T.any, null)
    .named('year', T.content, [])
    .returns(T.any)
    .external(starryUlfg)
  return doc(
    importPackage('@preview/starry-ulfg:0.2.0', [starryUlfg, appendix]),
    show(
      starryUlfg_with({
        documentTitle: 'Report - Your Name',
        candidates: ['Your Name'],
        title: 'Report',
        course: 'Course Name',
        year: inline`2025/2026`,
        professors: ['Professor [Name]'],
        acknowledgment: inline(lorem(180)),
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(180))),
    m.lines(m.heading(1, lorem(2)), m.heading(2, lorem(4)), inline(lorem(180))),
    m.lines(m.heading(2, lorem(4)), inline(lorem(180))),
    m.lines(m.heading(1, 'Conclusion'), inline(lorem(180))),
    show(appendix),
    m.lines(m.heading(1, 'Attestation'), inline(lorem(120))),
  )
}
