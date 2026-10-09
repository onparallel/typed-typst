// Converted from test/suite/corpus/cjk-punctuation-adjustment-1.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, m, page, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: em(15) }),
    m.lines(set(text, { lang: 'zh', region: 'CN', font: 'Noto Serif CJK SC' }), '原来，你也玩《原神》！？'),
    m.lines(set(text, { lang: 'zh', region: 'TW', font: 'Noto Serif CJK TC' }), '原來，你也玩《原神》！ ？'),
    m.lines(set(text, { lang: 'zh', region: 'CN', font: 'Noto Serif CJK SC' }), '「真的吗？」'),
    m.lines(set(text, { lang: 'ja', font: 'Noto Serif CJK JP' }), '「本当に？」'),
  )
}
