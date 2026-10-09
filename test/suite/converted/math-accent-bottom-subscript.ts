// Converted from test/suite/corpus/math-accent-bottom-subscript.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math`q_x != accent(q, \\u{032C})_x != accent(accent(q, \\u{032C}), \\u{032C})_x`))
}
