// Converted from test/suite/corpus/enum-built-in-loop.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`for i in range(5) {
   [+ #numbering("I", 1 + i)]
}`),
  )
}
