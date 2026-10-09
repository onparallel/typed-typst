// Converted from test/suite/corpus/math-accent-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math`hat(accent(L, \\u{0330})), accent(circle(p), \\u{0323}),
  macron(accent(caron(accent(A, \\u{20ED})), \\u{0333})) \\
  breve(accent(eta, \\u{032E})) = accent(breve(eta), \\u{032E})`),
  )
}
