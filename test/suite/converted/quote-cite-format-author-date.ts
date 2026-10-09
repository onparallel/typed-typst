// Converted from test/suite/corpus/quote-cite-format-author-date.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, label, m, path, pt, quote, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { size: pt(8) }),
      set(quote, { block: true }),
      inline(quote({ attribution: label('tolkien54') }, inline`In a hole in the ground there lived a hobbit.`)),
    ),
    m.lines(show(bibliography, null), inline(bibliography({ style: 'apa' }, path('/assets/bib/works.bib')))),
  )
}
