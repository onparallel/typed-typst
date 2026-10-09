// Converted from test/suite/corpus/smartquote-fi.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'fi' }),
      inline`"Hevonen ei syö kurkkusalaattia" oli ensimmäinen koskaan 'puhelimessa' lausuttu lause.`,
    ),
  )
}
