// Converted from test/suite/corpus/math-style-exceptions.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math`h, bb(N), cal(R), Theta, italic(Theta), sans(Theta), sans(italic(Theta)) \\
 bb(d), bb(italic(d)), italic(bb(d)), bb(e), bb(italic(e)), italic(bb(e)) \\
 bb(i), bb(italic(i)), italic(bb(i)), bb(j), bb(italic(j)), italic(bb(j)) \\
 bb(D), bb(italic(D)), italic(bb(D))`),
  )
}
