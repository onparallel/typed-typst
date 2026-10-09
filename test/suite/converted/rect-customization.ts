// Converted from test/suite/corpus/rect-customization.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  block,
  box,
  cm,
  doc,
  external,
  fr,
  inches,
  inline,
  lime,
  ltr,
  m,
  page,
  pct,
  pt,
  rect,
  red,
  rgb,
  set,
  stack,
} from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  return doc(
    set(page, { width: pt(150) }),
    inline(rect({ fill: conifer }, inline`Textbox`)),
    inline(block(rect({ height: pt(15), fill: rgb('46b3c2'), stroke: add(pt(2), rgb('234994')) }))),
    inline(rect({ width: cm(2), fill: rgb('9650d6') }, inline`Fixed and padded`)),
    inline(rect({ height: cm(1), width: pct(100), fill: rgb('734ced') }, inline`Topleft`)),
    inline`{${box(rect({ width: inches(0.5), height: pt(7), fill: rgb('d6cd67') }))} ${box(rect({ width: inches(0.5), height: pt(7), fill: rgb('edd466') }))}
${box(rect({ width: inches(0.5), height: pt(7), fill: rgb('e3be62') }))}}`,
    inline(
      stack(
        { dir: ltr, spacing: fr(1) },
        rect({ width: cm(2), radius: pct(30) }),
        rect({ width: cm(1), radius: { left: pt(10), right: pt(5) } }),
        rect({ width: cm(1.25), radius: { topLeft: pt(2), topRight: pt(5), bottomRight: pt(8), bottomLeft: pt(11) } }),
      ),
    ),
    m.lines(
      set(rect, { stroke: { right: red } }),
      inline(rect({ width: pct(100), fill: lime, stroke: { x: pt(5), y: pt(1) } })),
    ),
  )
}
