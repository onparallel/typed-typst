// Converted from test/suite/corpus/destructuring-let-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      unsafeRaw.markup`#let ((a, b), (key: c)) = ((1, 2), (key: 3))`,
      inline(test(unsafeRaw.code<any>`(a, b, c)`, [1, 2, 3])),
    ),
  )
}
