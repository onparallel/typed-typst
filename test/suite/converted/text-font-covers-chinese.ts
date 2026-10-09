// Converted from test/suite/corpus/text-font-covers-chinese.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, regex, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { font: ['Ubuntu', 'Noto Serif CJK SC'] }), '分别设置“中文”和English字体'),
    m.lines(
      set(text, { font: [{ name: 'Noto Serif CJK SC', covers: regex('[·-𱍏]') }, 'Ubuntu'] }),
      '分别设置“中文”和English字体',
    ),
    m.lines(
      set(text, { font: [{ name: 'Ubuntu', covers: 'latin-in-cjk' }, 'Noto Serif CJK SC'] }),
      '分别设置“中文”和English字体',
    ),
  )
}
