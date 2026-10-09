// Converted from test/suite/corpus/issue-rtl-safe-to-break-panic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m, rtl, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { dir: rtl, font: 'Noto Serif Hebrew' }), inline`${linebreak()} ט`))
}
