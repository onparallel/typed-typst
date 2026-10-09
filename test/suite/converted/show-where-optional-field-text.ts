// Converted from test/suite/corpus/show-where-optional-field-text.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, red, set, show, text, where } from '../../../src/index.ts'

export default () => {
  return doc(
    show(where(text, { lang: 'de' }), set(text, { fill: red })),
    m.lines(set(text, { lang: 'es' }), 'Hola, mundo!'),
    m.lines(set(text, { lang: 'de' }), 'Hallo Welt!'),
    m.lines(set(text, { lang: 'en' }), 'Hello World!'),
  )
}
