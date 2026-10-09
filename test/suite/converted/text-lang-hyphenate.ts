// Converted from test/suite/corpus/text-lang-hyphenate.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, fr, grid, inline, m, pt, set, text, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { hyphenate: true }),
      inline(
        grid(
          { columns: times(2, [pt(20)]), gutter: fr(1) },
          text({ lang: 'en' }, inline`"Eingabeaufforderung"`),
          text({ lang: 'de' }, inline`"Eingabeaufforderung"`),
        ),
      ),
    ),
  )
}
