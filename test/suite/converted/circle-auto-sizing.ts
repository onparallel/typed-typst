// Converted from test/suite/corpus/circle-auto-sizing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  black,
  blocks,
  center,
  circle,
  doc,
  external,
  horizon,
  inline,
  linebreak,
  m,
  pt,
  rect,
  rgb,
  set,
  text,
  white,
} from '../../../src/index.ts'

export default () => {
  const forest = external('forest')
  const conifer = external('conifer')
  return doc(
    set(circle, { inset: pt(0) }),
    inline`Auto-sized circle. ${circle({ fill: rgb('eb5278'), stroke: add(pt(2), black) }, align(add(center, horizon), inline`But, soft!`))}`,
    inline`Center-aligned rect in auto-sized circle. ${circle({ fill: forest, stroke: conifer }, align(add(center, horizon), rect({ fill: conifer, inset: pt(5) }, inline`But, soft!`)))}`,
    inline`Rect in auto-sized circle. ${circle({ fill: forest }, rect({ fill: conifer, stroke: white, inset: pt(4) }, blocks(m.lines(set(text, { size: pt(8) }), 'But, soft! what light through yonder window breaks?'))))}`,
    inline`Expanded by height. ${circle({ stroke: black }, align(center, inline`A ${linebreak()} B ${linebreak()} C`))}`,
  )
}
