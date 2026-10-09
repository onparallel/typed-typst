// Converted from test/suite/corpus/grid-nested-breaking.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  cm,
  doc,
  eastern,
  fr,
  grid,
  inline,
  linebreak,
  m,
  page,
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
      set(page, { width: cm(5), height: cm(2.25) }),
      inline(
        grid(
          { columns: times(4, [fr(1)]), rowGutter: pt(10), columnGutter: [pt(0), pct(10)] },
          inline`A`,
          inline`B`,
          inline`C`,
          inline`D`,
          grid({ columns: 2 }, inline`A`, inline`B`, times(inline`C${linebreak()}${space}`, 3), inline`D`),
          align(top, rect({ inset: pt(0), fill: eastern }, align(right, inline`LoL`))),
          inline`rofl`,
          times(inline`E${linebreak()}${space}`, 4),
        ),
      ),
    ),
  )
}
