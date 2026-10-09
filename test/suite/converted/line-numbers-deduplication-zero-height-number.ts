// Converted from test/suite/corpus/line-numbers-deduplication-zero-height-number.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  box,
  cm,
  doc,
  em,
  fr,
  grid,
  inline,
  linebreak,
  lorem,
  m,
  move,
  page,
  par,
  pt,
  set,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { margin: { left: cm(1.5) } }),
      set(par.line, {
        numbering: (n) => move({ dy: em(-0.6) }, box({ height: pt(0) }, inline(n))),
        numberClearance: cm(0.5),
      }),
    ),
    inline(
      grid(
        { columns: [fr(1), fr(1)], columnGutter: cm(0.5), rowGutter: pt(5) },
        lorem(5),
        inline`A${linebreak()} B${linebreak()} C`,
        inline`DDD`,
        inline`DDD`,
        inline`This is`,
        move({ dy: pt(3) }, inline`tough`),
      ),
    ),
  )
}
