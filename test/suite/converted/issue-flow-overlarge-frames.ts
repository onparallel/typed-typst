// Converted from test/suite/corpus/issue-flow-overlarge-frames.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, block, define, doc, inline, m, page, pt, set, space } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(m.lines(set(page, { height: pt(70) }), inline(block(lines(3)), space, block(lines(5)))))
}
