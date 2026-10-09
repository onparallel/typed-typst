// Converted from test/suite/corpus/quote-inline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, label, m, path, pt, quote, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { size: pt(8) }),
      inline(quote({ attribution: label('tolkien54') }, inline`In a hole in the ground there lived a hobbit.`)),
    ),
    m.lines(show(bibliography, null), inline(bibliography(path('/assets/bib/works.bib')))),
  )
}
