// Converted from test/suite/corpus/bidi-explicit-dir.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, ltr, m, rtl, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { dir: rtl }),
      inline`${text({ dir: ltr }, '8:00 - 9:00')} בבוקר ${linebreak()} ב ${text({ dir: ltr }, '12:00 - 13:00')}
בצהריים`,
    ),
  )
}
