// Converted from test/suite/corpus/linebreak-default-ignorables.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, symbol, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { font: 'Noto Sans Math' }),
      inline`${symbol('⊕')}${symbol('\u{fe00}')} vs ${symbol('⊕')}${symbol('\u{fe00}')}`,
    ),
  )
}
