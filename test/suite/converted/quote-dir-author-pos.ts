// Converted from test/suite/corpus/quote-dir-author-pos.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, quote, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { font: ['Libertinus Serif', 'Noto Sans Arabic'] }),
      inline`And I quote: ${quote({ attribution: inline`René Descartes` }, inline`cogito, ergo sum`)}.`,
    ),
    m.lines(set(text, { lang: 'ar' }), inline(quote({ attribution: inline`عالم` }, inline`مرحبًا`))),
  )
}
