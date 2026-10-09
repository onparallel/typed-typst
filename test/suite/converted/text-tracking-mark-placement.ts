// Converted from test/suite/corpus/text-tracking-mark-placement.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { font: ['PT Sans', 'Noto Serif Hebrew'] }), set(text, { tracking: em(0.3) }), 'טֶקסט'))
}
