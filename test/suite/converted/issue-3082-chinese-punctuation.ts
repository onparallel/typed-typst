// Converted from test/suite/corpus/issue-3082-chinese-punctuation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, page, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { font: 'Noto Serif CJK TC', lang: 'zh' }), set(page, { width: pt(230) })),
    '課有手冬，朱得過已誰卜服見以大您即乙太邊良，因且行肉因和拉幸，念姐遠米巴急（abc0），松黃貫誰。',
  )
}
