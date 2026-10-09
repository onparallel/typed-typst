// Converted from test/suite/corpus/text-font-covers-repeat.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, regex, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    set(text, { font: [{ name: 'Libertinus Serif', covers: regex('[0-9]') }, 'Libertinus Serif'] }),
    'The number 123.',
  )
}
