// Converted from test/suite/corpus/math-accent-overlay.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, red, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show('̸', set(text, { fill: red })),
      inline`${unsafeRaw.math`accent(W, \\u{0338})`}, ${unsafeRaw.math`accent(y, \\u{0338})`}`,
    ),
  )
}
