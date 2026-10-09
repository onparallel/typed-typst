// Converted from test/suite/corpus/loop-break-join-in-nested-blocks.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`for _ in range(10) {
  [Hello ]
  [World #{
    [🌎]
    break
  }]
}`),
  )
}
