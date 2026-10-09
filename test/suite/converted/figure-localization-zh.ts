// Converted from test/suite/corpus/figure-localization-zh.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, inline, m, rect, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { lang: 'zh' }), inline(figure({ caption: inline`一个矩形` }, rect()))))
}
