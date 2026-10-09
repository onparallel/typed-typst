// Converted from test/suite/corpus/loop-break-join-in-first-arg.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`for i in range(10) {
  table(
    { [A]; break },
    for _ in range(3) [B]
  )
}`),
  )
}
