// Converted from test/suite/corpus/issue-3641-float-loop.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(set(page, { height: pt(40) }), m.lines(m.heading(1, 'Heading'), inline(lines(2))))
}
