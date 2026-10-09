// Converted from test/suite/corpus/issue-2595-float-overlap.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, aqua, auto, block, define, doc, inline, page, pct, place, pt, red, set } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    set(page, { height: pt(80) }),
    inline`1 ${place({ float: true }, auto, block({ height: pct(100), width: pct(100), fill: aqua }))}
${place({ float: true }, auto, block({ height: pct(100), width: pct(100), fill: red }))} ${lines(7)}`,
  )
}
