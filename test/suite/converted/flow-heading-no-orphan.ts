// Converted from test/suite/corpus/flow-heading-no-orphan.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(m.lines(set(page, { height: pt(100) }), inline(lines(4))), m.lines(m.heading(1, 'Introduction'), 'A'))
}
