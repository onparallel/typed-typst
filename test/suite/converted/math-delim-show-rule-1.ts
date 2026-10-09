// Converted from test/suite/corpus/math-delim-show-rule-1.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, green, inline, m, regex, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(regex('\\[|\\]'), set(text, { font: 'Noto Sans Math', fill: green })),
      inline(unsafeRaw.math.block`mat(delim: \\[, a, b, c; d, e, f; g, h, i) quad [x + y]`),
    ),
  )
}
