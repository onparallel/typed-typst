// Converted from test/suite/corpus/issue-4476-outline-rtl-title-ending-in-ltr-text.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m, outline, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { lang: 'he' }), inline(outline())),
    m.lines(
      show(heading, null),
      heading({ depth: 1 }, inline('הוקוס Pocus')),
      heading({ depth: 1 }, inline('זוהי כותרת שתורגמה על ידי מחשב')),
    ),
  )
}
