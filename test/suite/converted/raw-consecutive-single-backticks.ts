// Converted from test/suite/corpus/raw-consecutive-single-backticks.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, raw } from '../../../src/index.ts'

export default () => {
  return doc(inline(raw('A'), raw('B')))
}
