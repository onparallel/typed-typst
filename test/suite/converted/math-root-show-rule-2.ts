// Converted from test/suite/corpus/math-root-show-rule-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show('√', set(text, { size: em(2) })), inline(unsafeRaw.math.block`sqrt(2)`)))
}
