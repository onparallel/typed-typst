// Converted from test/suite/corpus/text-lang-unknown-region.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, outline, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { font: 'Noto Serif CJK TC', lang: 'zh', region: 'XX' }), inline(outline())))
}
