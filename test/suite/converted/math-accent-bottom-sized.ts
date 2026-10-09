// Converted from test/suite/corpus/math-accent-bottom-sized.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`accent(sum, \\u{0330}), accent(sum, \\u{0330}, size: #50%), accent(H, \\u{032D}, size: #200%)`,
    ),
  )
}
