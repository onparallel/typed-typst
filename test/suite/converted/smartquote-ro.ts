// Converted from test/suite/corpus/smartquote-ro.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'ro' }),
      inline`"Calul nu mănâncă salată de castraveți" a fost prima propoziție rostită vreodată la 'telefon'.`,
    ),
  )
}
