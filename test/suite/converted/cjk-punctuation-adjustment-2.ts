// Converted from test/suite/corpus/cjk-punctuation-adjustment-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { lang: 'zh', region: 'CN', font: 'Noto Serif CJK SC' }), '《书名〈章节〉》'),
    '〔茸毛〕：很细的毛',
  )
}
