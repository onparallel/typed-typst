// Converted from test/suite/corpus/math-style-fallback.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math`upright(frak(bold(alpha))) = upright(bold(alpha)) \\
bold(mono(ϝ)) = bold(ϝ) \\
sans(Theta) = bold(sans(Theta)) \\
bold(upright(planck)) != planck \\
bb(e) != italic(bb(e)) \\
serif(sans(A)) != serif(A)`),
  )
}
