// Converted from test/suite/corpus/issue-2214-baseline-math.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, pt, sym, symbol, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`hello ${text({ baseline: pt(-5) }, inline`123 ${sym.WW}${symbol('o')}rld`)}${linebreak()} hello
${text({ baseline: pt(-5) }, inline`${unsafeRaw.math`123 WW#text[or]`}ld`)}${linebreak()}`)
}
