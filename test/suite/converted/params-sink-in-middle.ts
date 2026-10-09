// Converted from test/suite/corpus/params-sink-in-middle.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`{
  let f(a, ..b, c) = (a, b, c)
  test(repr(f(1, 2)), "(1, arguments(), 2)")
  test(repr(f(1, 2, 3, 4, 5)), "(1, arguments(2, 3, 4), 5)")
}`),
  )
}
