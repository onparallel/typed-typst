// Converted from test/suite/corpus/smartquote-fr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'fr' }),
      inline`"Le cheval ne mange pas de salade de concombres" est la première phrase jamais prononcée au
'téléphone'.`,
    ),
  )
}
