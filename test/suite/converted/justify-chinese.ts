// Converted from test/suite/corpus/justify-chinese.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, page, par, pt, rect, rgb, set, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      set(par, { justify: true }),
      set(text, { lang: 'zh', font: 'Noto Serif CJK SC' }),
    ),
    inline(
      rect(
        { inset: pt(0), width: pt(80), fill: rgb('eee') },
        inline`${space}中文维基百科使用汉字书写，汉字是汉族或华人的共同文字，是中国大陆、新加坡、马来西亚、台湾、香港、澳门的唯一官方文字或官方文字之一。25.9%，而美国和荷兰则分別占13.7%及8.2%。近年來，中国大陆地区的维基百科编辑者正在迅速增加；${space}`,
      ),
    ),
  )
}
