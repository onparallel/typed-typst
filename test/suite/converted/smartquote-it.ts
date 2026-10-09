// Converted from test/suite/corpus/smartquote-it.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'it' }),
      inline`"Il cavallo non mangia insalata di cetrioli" è stata la prima frase pronunciata al 'telefono'.`,
    ),
  )
}
