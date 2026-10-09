// Converted from test/suite/corpus/issue-1373-bidi-tofus.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { data, doc, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline(data('֐֑֒֓')), inline(data('𰀀𰀁𰀂𰀃')))
}
