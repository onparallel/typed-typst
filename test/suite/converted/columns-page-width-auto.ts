// Converted from test/suite/corpus/columns-page-width-auto.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, page, set } from '../../../src/index.ts'

export default () => {
  return doc(set(page, { width: auto, columns: 3 }), 'Arbitrary horizontal growth.')
}
