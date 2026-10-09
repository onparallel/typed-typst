// Converted from test/suite/corpus/params-sink-at-start.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { define, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`{
  let f(..a, b) = (a, b)
  test(repr(f(1)), "(arguments(), 1)")
  test(repr(f(1, 2, 3)), "(arguments(1, 2), 3)")
  test(repr(f(1, 2, 3, 4, 5)), "(arguments(1, 2, 3, 4), 5)")
}`),
  )
}
