// Converted from test/suite/corpus/hyphenate-es-capitalized-names.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, m, page, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: cm(6.2) }), set(text, { lang: 'es', hyphenate: true })),
    'Tras el estallido de la contienda Ruiz-Giménez fue detenido junto a sus dos hermanos y puesto bajo custodia por las autoridades republicanas, con el objetivo de protegerle de las patrullas de milicianos.',
  )
}
