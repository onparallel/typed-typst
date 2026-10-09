// Converted from test/suite/corpus/math-delim-show-rule-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, codeBlock, doc, inline, m, math, regex, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.vec, (it, ctx) => codeBlock([show(regex('\\(|\\)'), set(text, { fill: blue }))], it)),
      inline(unsafeRaw.math.block`vec(1, 0, 0), mat(1; 0; 0), (1), binom(n, k)`),
    ),
  )
}
