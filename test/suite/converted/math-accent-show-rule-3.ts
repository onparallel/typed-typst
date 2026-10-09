// Converted from test/suite/corpus/math-accent-show-rule-3.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, green, inline, m, math, set, show, symbol, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.accent, (it, ctx) => codeBlock([show('̀', set(text, { fill: green }))], it)),
      inline`${unsafeRaw.math`grave(x)`}, x${symbol('\u{300}')}`,
    ),
  )
}
