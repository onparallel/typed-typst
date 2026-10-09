// Converted from test/suite/corpus/text-cjk-latin-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, auto, doc, m, page, par, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: add(pt(50), pt(10)), margin: { x: pt(5) } }),
      set(text, { lang: 'zh', font: 'Noto Serif CJK SC', cjkLatinSpacing: auto }),
      set(par, { justify: true }),
    ),
    '中文，中12文1中，文12中文',
    '中文，中ab文a中，文ab中文',
    set(text, { cjkLatinSpacing: null }),
    '中文，中12文1中，文12中文',
    '中文，中ab文a中，文ab中文',
  )
}
