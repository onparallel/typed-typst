// Converted from test/suite/corpus/math-delim-show-rule-5.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, regex, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(regex('\\(|\\)'), set(text, { size: em(1.5) })),
      inline(unsafeRaw.math.block`10 dot (9 - 5) dot (1/2 - 1)`),
    ),
  )
}
