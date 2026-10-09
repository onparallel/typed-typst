// Converted from test/suite/corpus/footnote-tags-different-lang.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, doc, footnote, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(inline`Footnote ${footnote(blocks(m.lines(set(text, { lang: 'de' }), 'Hallo')))} in text.`)
}
