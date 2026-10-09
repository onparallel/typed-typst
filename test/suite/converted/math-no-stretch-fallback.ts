// Converted from test/suite/corpus/math-no-stretch-fallback.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(text, { font: 'STIX Two Math' })),
      inline(unsafeRaw.math.block`script(sqrt(x) (a))`),
    ),
  )
}
