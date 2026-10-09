// Converted from test/suite/corpus/destructuring-let-dict.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      unsafeRaw.markup`#let (a: a, b, x: c) = (a: 1, b: 2, x: 3)`,
      inline(
        test(unsafeRaw.code<any>`a`, 1),
        space,
        test(unsafeRaw.code<any>`b`, 2),
        space,
        test(unsafeRaw.code<any>`c`, 3),
      ),
    ),
  )
}
