// Converted from test/suite/corpus/destructuring-assign-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      unsafeRaw.markup`#let a`,
      unsafeRaw.markup`#let b`,
      unsafeRaw.markup`#let c`,
      inline(
        unsafeRaw.code<any>`(((a, b), (key: c)) = ((1, 2), (key: 3)))`,
        space,
        test(unsafeRaw.code<any>`(a, b, c)`, [1, 2, 3]),
      ),
    ),
  )
}
