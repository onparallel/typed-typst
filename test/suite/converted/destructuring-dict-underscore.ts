// Converted from test/suite/corpus/destructuring-dict-underscore.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`{
  (best: _) = (best: "brr")
}`),
  )
}
