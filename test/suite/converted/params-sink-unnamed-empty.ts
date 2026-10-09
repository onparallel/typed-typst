// Converted from test/suite/corpus/params-sink-unnamed-empty.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`{
  let f(a, b: 5, ..) = (a, b)
  test(f(4), (4, 5))
  test(f(10, b: 11), (10, 11))
  test(f(13, 20, b: 12), (13, 12))
  test(f(15, b: 16, c: 13), (15, 16))
}`),
  )
}
