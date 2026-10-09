// Converted from test/suite/corpus/smartquote-es-mx.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'es', region: 'MX' }),
      inline`"El caballo no come ensalada de pepino" fue la primera frase pronunciada por 'teléfono'.`,
    ),
  )
}
