// Converted from test/suite/corpus/align-center-in-flow.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, blocks, center, doc, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline(align(center, blocks('Lorem Ipsum', 'Dolor'))))
}
