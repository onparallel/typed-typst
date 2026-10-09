// Converted from test/suite/corpus/underline-stroke-folding.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, pt, red, set, text, underline } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(underline, { stroke: pt(2), offset: pt(2) }), inline(underline(text({ fill: red }, inline`DANGER!`)))),
  )
}
