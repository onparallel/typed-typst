// Converted from test/suite/corpus/issue-4476-outline-rtl-title-ending-in-ltr-text.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, inline, m, outline, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { lang: 'he' }), inline(outline())),
    m.lines(show(heading, null), m.heading(1, 'הוקוס Pocus'), m.heading(1, 'זוהי כותרת שתורגמה על ידי מחשב')),
  )
}
