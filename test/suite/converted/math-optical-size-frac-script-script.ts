// Converted from test/suite/corpus/math-optical-size-frac-script-script.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { contentBlock, doc, inline, pt, set, space, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`${unsafeRaw.math.block`1/(x^A)`} ${contentBlock(inline(set(text, { size: pt(18) }), space, unsafeRaw.math`1/(x^A)`))}
vs. ${contentBlock(inline(set(text, { size: pt(14) }), space, unsafeRaw.math`x^A`))}`)
}
