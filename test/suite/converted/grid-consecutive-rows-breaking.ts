// Converted from test/suite/corpus/grid-consecutive-rows-breaking.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  cm,
  doc,
  eastern,
  fr,
  grid,
  image,
  inline,
  linebreak,
  m,
  page,
  path,
  pct,
  pt,
  rect,
  right,
  set,
  space,
  times,
  top,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: cm(5), height: cm(2) }),
      inline(
        grid(
          { columns: times(4, [fr(1)]), rowGutter: pt(10), columnGutter: [pt(0), pct(10)] },
          align(top, image(path('/assets/images/rhino.png'))),
          align(top, rect({ inset: pt(0), fill: eastern }, align(right, inline`LoL`))),
          inline`rofl`,
          times(inline`${linebreak()} A`, 3),
          times(inline`Ha!${linebreak()}${space}`, 3),
        ),
      ),
    ),
  )
}
