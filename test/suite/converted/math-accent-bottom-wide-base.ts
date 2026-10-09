// Converted from test/suite/corpus/math-accent-bottom-wide-base.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math`accent(x + y, \\u{20EF}), accent(sum, \\u{032D})`))
}
