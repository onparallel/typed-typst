// Converted from test/suite/corpus/math-accent-flattened-fallback.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(text, { font: 'STIX Two Math' })),
      inline(unsafeRaw.math.block`hat(A, size: #2em) quad hat(A) quad hat(A, size: #200%) \\
  grave(I, size: #2em) quad grave(I) quad grave(I, size: #200%)`),
    ),
  )
}
