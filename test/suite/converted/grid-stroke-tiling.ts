// Converted from test/suite/corpus/grid-stroke-tiling.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  center,
  codeBlock,
  doc,
  inline,
  let_,
  line,
  pct,
  place,
  pt,
  strong,
  table,
  tiling,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [doubleLineDecl, doubleLine] = let_(
    'double-line',
    tiling(
      { size: [pt(1.5), pt(1.5)] },
      codeBlock([], place(line({ stroke: pt(0.6), start: [pct(0), pct(50)], end: [pct(100), pct(50)] }))),
    ),
  )
  return doc(
    doubleLineDecl,
    inline(
      table(
        { stroke: unsafeRaw.code<any>`(_, y) => if y != 1 { (bottom: black) }`, columns: 3 },
        table.cell({ colspan: 3, align: center }, inline(strong(inline`Epic Table`))),
        align(center, inline(strong(inline`Name`))),
        align(center, inline(strong(inline`Age`))),
        align(center, inline(strong(inline`Data`))),
        table.hline({ stroke: { paint: doubleLine, thickness: pt(2) } }),
        inline`John`,
        inline`30`,
        inline`None`,
        inline`Martha`,
        inline`20`,
        inline`A`,
        inline`Joseph`,
        inline`35`,
        inline`D`,
      ),
    ),
  )
}
