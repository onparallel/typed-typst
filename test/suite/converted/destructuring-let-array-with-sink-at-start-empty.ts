// Converted from test/suite/corpus/destructuring-let-array-with-sink-at-start-empty.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      unsafeRaw.markup`#let (..a, b, c) = (1, 2)`,
      inline(
        test(unsafeRaw.code<any>`a`, []),
        space,
        test(unsafeRaw.code<any>`b`, 1),
        space,
        test(unsafeRaw.code<any>`c`, 2),
      ),
    ),
  )
}
