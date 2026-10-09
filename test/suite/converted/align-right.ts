// Converted from test/suite/corpus/align-right.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, doc, m, right, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(align, { alignment: right }), 'To the right! Where the sunlight peeks behind the mountain.'))
}
