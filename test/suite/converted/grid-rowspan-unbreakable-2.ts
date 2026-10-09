// Converted from test/suite/corpus/grid-rowspan-unbreakable-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  codeBlock,
  define,
  doc,
  em,
  fr,
  grid,
  inches,
  inline,
  m,
  pct,
  pt,
  show,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      show(grid.cell, (it, ctx) =>
        codeBlock([
          test(
            it.breakable,
            unsafeRaw.code<any>`(it.x, it.y) != (0, 6) and (it.y in (2, 5, 6) or (it.x, it.y) in ((0, 1), (2, 3), (1, 7)))`,
          ),
          it.breakable,
        ]),
      ),
      inline(
        grid(
          {
            columns: 3,
            rows: [pt(6), fr(1), auto, pct(1), em(1), auto, auto, inches(0.2)],
            rowGutter: [pt(0), pt(0), pt(0), auto],
          },
          inline`a`,
          inline`b`,
          inline`c`,
          grid.cell({ rowspan: 3 }, inline`d`),
          inline`e`,
          inline`f`,
          inline`g`,
          inline`h`,
          inline`i`,
          grid.cell({ rowspan: 2 }, inline`j`),
          inline`k`,
          grid.cell({ y: 5 }, inline`l`),
          grid.cell({ y: 6, breakable: false }, inline`m`),
          grid.cell({ y: 6, breakable: true }, inline`n`),
          grid.cell({ y: 7, breakable: false }, inline`o`),
          grid.cell({ y: 7, breakable: true }, inline`p`),
          grid.cell({ y: 7, breakable: auto }, inline`q`),
        ),
      ),
    ),
  )
}
