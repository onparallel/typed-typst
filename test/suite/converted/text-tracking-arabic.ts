// Converted from test/suite/corpus/text-tracking-arabic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { tracking: em(0.3), font: 'Noto Sans Arabic' }), 'النص'))
}
