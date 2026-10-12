// Converted from test/suite/corpus/text-lang-region.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, m, outline, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { font: 'Noto Serif CJK TC', lang: 'zh', region: 'TW' }), inline(outline())))
}
