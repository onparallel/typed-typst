// Converted from test/suite/corpus/issue-5490-bidi-invalid-range.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pt, raw, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'he' }),
      set(raw, { lang: 'python' }),
      set(page, { width: pt(240) }),
      inline`בדיקה האם מספר מתחלק במספר אחר. לדוגמה ${raw('if a % 2 == 0')}`,
    ),
  )
}
