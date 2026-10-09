// Converted from test/suite/corpus/columns-one.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, cm, doc, page, set } from '../../../src/index.ts'

export default () => {
  return doc(set(page, { height: auto, width: cm(7.05), columns: 1 }), 'This is a normal page. Very normal.')
}
