// Converted from test/suite/corpus/par-hanging-indent-rtl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, m, par, rtl, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(par, { hangingIndent: em(2) }),
      set(text, { dir: rtl, font: ['Libertinus Serif', 'Noto Sans Arabic'] }),
      'لآن وقد أظلم الليل وبدأت النجوم تنضخ وجه الطبيعة التي أعْيَتْ من طول ما انبعثت في النهار',
    ),
  )
}
