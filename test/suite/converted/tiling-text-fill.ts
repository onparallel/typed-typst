// Converted from test/suite/corpus/tiling-text-fill.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  color,
  doc,
  gradient,
  inline,
  let_,
  lorem,
  m,
  pt,
  set,
  spread,
  square,
  text,
  tiling,
} from '../../../src/index.ts'

export default () => {
  const [tDecl, t] = let_(
    't',
    tiling(
      { size: [pt(30), pt(30)], relative: 'parent' },
      square({ size: pt(30), fill: gradient.conic(spread(color.map.rainbow)) }),
    ),
  )
  return doc(m.lines(tDecl, set(text, { fill: t })), inline(lorem(20)))
}
