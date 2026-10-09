// Converted from test/suite/corpus/block-sticky-breakable.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, block, define, doc, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(m.lines(set(page, { height: pt(60) }), inline`${block({ sticky: true }, lines(4))} E`))
}
