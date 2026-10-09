// Converted from test/universe/corpus/minicise.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, lorem, m, show } from '../../../src/index.ts'

export default () => {
  const sheet = external('sheet')
  const sheet_with = define('with')
    .named('author', T.content, [])
    .named('course', T.content, [])
    .named('date', T.content, [])
    .named('semester', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(sheet)
  return doc(
    importPackage('@preview/minicise:0.1.0', [sheet]),
    show(
      sheet_with({
        title: inline`My Title`,
        course: inline`My Course`,
        author: inline`John Doe, Jane Doe`,
        date: inline`2025-12-05`,
        semester: inline`Winter semester 2025/26`,
      }),
    ),
    m.heading(1, 'Exercise 1'),
    inline(lorem(100)),
    m.heading(1, 'Exercise 2'),
    inline(lorem(100)),
    m.heading(2, 'Exercise 2.1'),
    m.list(m.item([lorem(50)]), m.item([lorem(20)]), m.item([lorem(100)])),
    m.heading(2, 'Exercise 2.2'),
    inline(lorem(70)),
  )
}
