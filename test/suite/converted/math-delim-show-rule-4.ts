// Converted from test/suite/corpus/math-delim-show-rule-4.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, navy, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show('{', set(text, { fill: navy })),
      inline(unsafeRaw.math.block`cases(x + y + z = 0, 2x - y = 0, -5y + 2z = 0)`),
    ),
  )
}
