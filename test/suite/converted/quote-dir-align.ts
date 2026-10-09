// Converted from test/suite/corpus/quote-dir-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, quote, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { font: ['Libertinus Serif', 'Noto Sans Arabic'] }),
      set(quote, { block: true }),
      inline(quote({ attribution: inline`René Descartes` }, inline`cogito, ergo sum`)),
    ),
    m.lines(set(text, { lang: 'ar' }), inline(quote({ attribution: inline`عالم` }, inline`مرحبًا`))),
  )
}
