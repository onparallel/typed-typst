// Converted from test/suite/corpus/loop-break-join-in-set-rule-args.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`for i in range(10) {
  [Hello]
  set text(blue, ..break)
  [Not happening]
}`),
  )
}
