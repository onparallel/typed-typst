// Converted from test/suite/corpus/justify-variants.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, m, page, par, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: add(pt(170), pt(10)), margin: { x: pt(5) } }),
      set(text, { lang: 'zh', font: 'Noto Serif CJK SC' }),
      set(par, { justify: true }),
    ),
    '孔雀最早见于《山海经》中的《海内经》：“有孔雀。”东汉杨孚著《异物志》记载，岭南：“孔雀，其大如大雁而足高，毛皆有斑纹彩，捕而蓄之，拍手即舞。”',
    m.lines(
      set(text, { lang: 'zh', region: 'hk', font: 'Noto Serif CJK TC' }),
      '孔雀最早见于《山海经》中的《海内经》：「有孔雀。」东汉杨孚著《异物志》记载，岭南：「孔雀，其大如大雁而足高，毛皆有斑纹彩，捕而蓄之，拍手即舞。」',
    ),
  )
}
