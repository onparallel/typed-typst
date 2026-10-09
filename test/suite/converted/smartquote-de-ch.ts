// Converted from test/suite/corpus/smartquote-de-ch.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'de', region: 'CH' }),
      inline`"Das Pferd frisst keinen Gurkensalat" war der erste jemals am 'Fernsprecher' gesagte Satz.`,
    ),
  )
}
