// Converted from test/suite/corpus/issue-3586-figure-caption-separator.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, figure, inline, m, table, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  return doc(
    m.lines(
      unsafeRaw.markup`#show figure.caption: c => test(c.separator, [#": "])`,
      inline(figure({ caption: inline`This is a test caption` }, table(inline()))),
    ),
  )
}
