// Converted from test/suite/corpus/line-numbers-nested-content.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, box, cm, doc, fr, grid, inline, linebreak, lorem, m, page, par, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { margin: { left: cm(1.5) } }), set(par.line, { numbering: '1', numberClearance: cm(0.5) })),
    inline(
      grid(
        { columns: [fr(1), fr(1)], columnGutter: cm(0.5), inset: pt(5) },
        block(inline`A${linebreak()} ${box(lorem(5))}`),
        inline`Roses${linebreak()} are${linebreak()} red`,
        inline`AAA`,
        inline(),
        inline(),
        block(inline`BBB${linebreak()} CCC`),
      ),
    ),
  )
}
