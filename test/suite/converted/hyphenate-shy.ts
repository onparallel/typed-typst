// Converted from test/suite/corpus/hyphenate-shy.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, m, pt, set, sym, text, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'de', hyphenate: true }),
      inline(
        grid({ columns: times(2, [pt(20)]), gutter: pt(20) }, inline`Barankauf`, inline`Bar${sym.hyph.soft}ankauf`),
      ),
    ),
  )
}
