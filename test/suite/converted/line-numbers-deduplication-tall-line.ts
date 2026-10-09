// Converted from test/suite/corpus/line-numbers-deduplication-tall-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, cm, doc, fr, grid, inline, linebreak, m, page, par, pt, red, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { margin: { left: cm(1.5) } }), set(par.line, { numbering: '1', numberClearance: cm(0.5) })),
    inline(
      grid(
        { columns: [fr(1), fr(1)], columnGutter: cm(0.5), stroke: pt(0.5) },
        grid.cell({ rowspan: 2 }, inline`very ${box({ fill: red, height: cm(4) }, inline`tall`)}`),
        grid.cell({ inset: { y: pt(0.5) } }, inline`Line 1${linebreak()} Line 2${linebreak()} Line 3`),
        grid.cell(
          { inset: { y: pt(0.5) } },
          inline`Line 4${linebreak()} Line 5${linebreak()} Line 6${linebreak()} Line 7${linebreak()} Line 8${linebreak()}
Line 9${linebreak()} End`,
        ),
      ),
    ),
  )
}
