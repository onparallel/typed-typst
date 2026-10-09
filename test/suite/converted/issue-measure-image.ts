// Converted from test/suite/corpus/issue-measure-image.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`context {
  let size = measure(image("/assets/images/tiger.jpg"))
  test(size, (width: 1024pt, height: 670pt))
}`),
  )
}
