// Converted from test/suite/corpus/destructuring-group-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      unsafeRaw.markup`#let ((a, b)) = (1, 2)`,
      inline(test(unsafeRaw.code<any>`a`, 1), space, test(unsafeRaw.code<any>`b`, 2)),
    ),
  )
}
