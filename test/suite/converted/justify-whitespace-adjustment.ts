// Converted from test/suite/corpus/justify-whitespace-adjustment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, blocks, doc, inline, m, page, par, pt, rect, rgb, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      set(text, { lang: 'zh', font: 'Noto Serif CJK SC' }),
      set(par, { justify: true }),
      inline(
        rect(
          { inset: pt(0), width: pt(80), fill: rgb('eee') },
          blocks('“引号测试”，还，', '《书名》《测试》下一行', '《书名》《测试》。'),
        ),
      ),
    ),
    '「『引号』」。“‘引号’”。',
  )
}
