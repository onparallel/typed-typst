// Converted from test/suite/corpus/stroke-text.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  auto,
  blue,
  doc,
  gradient,
  inline,
  let_,
  m,
  page,
  pt,
  red,
  set,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [vDecl, v_2] = let_('v', inline`测试字体Test`)
  return doc(
    m.lines(set(text, { size: pt(20) }), set(page, { width: auto }), vDecl),
    inline(text({ stroke: add(pt(0.3), red) }, v_2)),
    inline(text({ stroke: add(pt(0.7), red) }, v_2)),
    inline(text({ stroke: add(pt(7), red) }, v_2)),
    inline(text({ stroke: { paint: blue, thickness: pt(1), dash: 'dashed' } }, v_2)),
    inline(text({ stroke: unsafeRaw.code<any>`1pt + gradient.linear(..color.map.rainbow)` }, v_2)),
  )
}
