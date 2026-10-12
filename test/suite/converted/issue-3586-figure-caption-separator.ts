// Converted from test/suite/corpus/issue-3586-figure-caption-separator.typ by scripts/convert-suite.ts — do not edit.
import { T, data, define, doc, figure, inline, m, show, table, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  return doc(
    m.lines(
      show(figure.caption, (c, ctx) => test(unsafeRaw.code({ c })<any>`c.separator`, inline(data(': ')))),
      inline(figure({ caption: inline`This is a test caption` }, table(inline()))),
    ),
  )
}
