// Converted from test/suite/corpus/math-accent-bottom.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math`accent(a, \\u{20EE}), accent(T, \\u{0323}), accent(xi, \\u{0332}),
  accent(f, \\u{20ED}), accent(F, \\u{20E8}), accent(y, \\u{032E}),
  accent(!, \\u{032F}), accent(J, \\u{0333}), accent(p, \\u{0331})`),
  )
}
