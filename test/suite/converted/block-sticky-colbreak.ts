// Converted from test/suite/corpus/block-sticky-colbreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, colbreak, doc, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline`A ${block({ sticky: true }, inline`B`)} ${colbreak()} C`)
}
