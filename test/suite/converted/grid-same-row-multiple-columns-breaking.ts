// Converted from test/suite/corpus/grid-same-row-multiple-columns-breaking.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, fr, grid, inline, linebreak, m, page, pct, pt, set, space, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: cm(5), height: cm(2) }),
      inline(
        grid(
          { columns: times(3, [fr(1)]), rowGutter: pt(8), columnGutter: [pt(0), pct(10)] },
          inline`A`,
          inline`B`,
          inline`C`,
          times(inline`Ha!${linebreak()}${space}`, 6),
          inline`rofl`,
          times(inline`${linebreak()} A`, 3),
          inline`hello`,
          inline`darkness`,
          inline`my old`,
        ),
      ),
    ),
  )
}
