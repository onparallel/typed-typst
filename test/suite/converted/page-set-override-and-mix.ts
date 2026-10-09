// Converted from test/suite/corpus/page-set-override-and-mix.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, eastern, inline, m, page, set, smallcaps, text, white } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { paper: 'a4' }),
      set(page, { paper: 'a5' }),
      set(page, { flipped: true, fill: eastern, paper: 'a11' }),
      set(text, { font: 'Roboto', fill: white }),
      inline(smallcaps(inline`Typst`)),
    ),
  )
}
