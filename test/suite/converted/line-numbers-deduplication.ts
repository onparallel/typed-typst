// Converted from test/suite/corpus/line-numbers-deduplication.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, fr, grid, inline, linebreak, lorem, m, move, page, par, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { margin: { left: cm(1.5) } }), set(par.line, { numbering: '1', numberClearance: cm(0.5) })),
    inline(
      grid(
        { columns: [fr(1), fr(1)], columnGutter: cm(0.5), rowGutter: pt(5) },
        lorem(5),
        inline`A${linebreak()} B${linebreak()} C`,
        inline`DDD`,
        inline`DDD`,
        inline`This is`,
        move({ dy: pt(2) }, inline`tough`),
      ),
    ),
  )
}
