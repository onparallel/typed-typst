// Converted from test/suite/corpus/flow-par-no-orphan-and-widow-lines.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blue, define, doc, inline, m, maroon, olive, page, pt, set, text } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').rest('args', T.any).returns(T.any).external()
  return doc(
    m.lines(set(page, { width: pt(60), height: pt(140) }), set(text, { weight: 700 })),
    m.lines(set(text, { fill: blue }), inline(lines(8))),
    inline(lines(6, '1')),
    m.lines(set(text, { fill: maroon }), inline(lines(4))),
    inline(lines(4, '1')),
    m.lines(set(text, { fill: olive }), inline(lines(3))),
  )
}
