// Converted from test/suite/corpus/hyphenate-es-repeat-hyphen.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, m, page, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: cm(6) }), set(text, { lang: 'es', hyphenate: true })),
    'Lo que entendemos por nivel léxico-semántico, en cuanto su sentido más gramatical: es aquel que estudia el origen y forma de las palabras de un idioma.',
  )
}
