// Converted from test/suite/corpus/smartquote-gl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'gl' }),
      inline`"O cabalo non come ensalada de cogombro" foi a primeira frase pronunciada por 'teléfono'.`,
    ),
  )
}
