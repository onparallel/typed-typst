// Converted from test/suite/corpus/issue-5262-block-negative-height-in-flow.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { height: pt(60) }), inline`a ${block({ height: pt(-25) }, inline`b`)} c`))
}
