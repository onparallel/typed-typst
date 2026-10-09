// Converted from test/suite/corpus/cjk-punctuation-adjustment-3.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, m, page, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: em(21) }), set(text, { lang: 'zh', region: 'CN', font: 'Noto Serif CJK SC' })),
    '（〔中〕医、〔中〕药、技）系列评审',
    '（长三角［长江三角洲］）（GB/T 16159—2012《汉语拼音正词法基本规则》）',
    '【爱因斯坦（Albert Einstein）】物理学家',
    '〔（2009）民申字第1622号〕',
    '“江南海北长相忆，浅水深山独掩扉。”（［唐］刘长卿《会赦后酬主簿所问》）',
    '参看1378页〖象形文字〗。（《现代汉语词典》修订本）',
  )
}
