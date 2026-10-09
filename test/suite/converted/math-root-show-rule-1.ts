// Converted from test/suite/corpus/math-root-show-rule-1.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, red, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show('√', set(text, { font: 'Noto Sans Math', fill: red })),
      inline(unsafeRaw.math.block`root(2, (a + b) / c)`),
    ),
  )
}
