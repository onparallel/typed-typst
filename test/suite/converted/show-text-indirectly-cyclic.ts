// Converted from test/suite/corpus/show-text-indirectly-cyclic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show('Good', inline`Typst!`), show('Typst', inline`Fun!`), show('Fun', inline`Good!`)),
    m.lines(set(text, { ligatures: false }), inline`Good ${linebreak()} Fun ${linebreak()} Typst ${linebreak()}`),
  )
}
