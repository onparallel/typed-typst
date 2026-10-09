// Converted from test/suite/corpus/math-accent-flattened.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, show, space, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(text, { font: 'STIX Two Math' })),
      inline(
        unsafeRaw.math`hat(a) hat(A)`,
        space,
        unsafeRaw.math`tilde(w) tilde(W)`,
        space,
        unsafeRaw.math`grave(i) grave(j)`,
        space,
        unsafeRaw.math`grave(I) grave(J)`,
      ),
    ),
  )
}
