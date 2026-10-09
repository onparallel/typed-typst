// Converted from test/suite/corpus/ellipse-auto-sizing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  blocks,
  box,
  center,
  cm,
  doc,
  ellipse,
  external,
  horizon,
  inline,
  m,
  pct,
  pt,
  rect,
  rgb,
  set,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  const forest = external('forest')
  const conifer = external('conifer')
  return doc(
    m.lines(set(rect, { inset: pt(0) }), set(ellipse, { inset: pt(0) })),
    inline`Rect in ellipse in fixed rect. ${rect({ width: cm(3), height: cm(2), fill: rgb('2a631a') }, ellipse({ fill: forest, width: pct(100), height: pct(100) }, rect({ fill: conifer, width: pct(100), height: pct(100) }, align(add(center, horizon), inline`${space}Stuff inside an ellipse!${space}`))))}`,
    inline`Auto-sized ellipse. ${ellipse({ fill: conifer, stroke: add(pt(3), forest), inset: pt(3) }, blocks(m.lines(set(text, { size: pt(8) }), 'But, soft! what light through yonder window breaks?')))}`,
    inline`An inline ${box(ellipse({ width: pt(8), height: pt(6), outset: { top: pt(3), rest: pt(5.5) } }))}
ellipse.`,
  )
}
