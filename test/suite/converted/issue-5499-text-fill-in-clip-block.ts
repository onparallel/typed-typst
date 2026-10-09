// Converted from test/suite/corpus/issue-5499-text-fill-in-clip-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  block,
  blue,
  codeBlock,
  color,
  doc,
  em,
  gradient,
  inline,
  let_,
  pct,
  pt,
  space,
  spread,
  square,
  text,
  tiling,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [tDecl, t] = let_(
    't',
    tiling(
      { size: [pt(30), pt(30)], relative: 'parent' },
      square({ size: pt(30), fill: gradient.conic(spread(color.map.rainbow)) }),
    ),
  )
  return doc(
    tDecl,
    inline(
      block(
        { clip: false, height: em(2) },
        codeBlock([
          text({ fill: blue }, 'Hello'),
          inline(space),
          text({ fill: blue.darken(pct(20)).transparentize(pct(50)) }, 'Hello'),
          inline(space),
          text({ fill: unsafeRaw.code<any>`gradient.linear(..color.map.rainbow)` }, 'Hello'),
          inline(space),
          text({ fill: t }, 'Hello'),
        ]),
      ),
      space,
      block(
        { clip: true, height: em(2) },
        codeBlock([
          text({ fill: blue }, 'Hello'),
          inline(space),
          text({ fill: blue.darken(pct(20)).transparentize(pct(50)) }, 'Hello'),
          inline(space),
          text({ fill: unsafeRaw.code<any>`gradient.linear(..color.map.rainbow)` }, 'Hello'),
          inline(space),
          text({ fill: t }, 'Hello'),
        ]),
      ),
    ),
  )
}
