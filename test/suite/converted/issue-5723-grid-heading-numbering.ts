// Converted from test/suite/corpus/issue-5723-grid-heading-numbering.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  cm,
  define,
  doc,
  fr,
  heading,
  inline,
  m,
  page,
  pt,
  set,
  spread,
  table,
  times,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(set(heading, { numbering: '1.1.' }), set(page, { width: pt(150), height: cm(3.5) })),
    inline(
      table(
        { columns: [fr(1), fr(2)] },
        blocks(m.heading(1, 'A')),
        blocks(m.heading(1, 'B')),
        blocks(m.lines(m.heading(1, 'C'), inline(lines(4)), m.heading(1, 'D'))),
        table(
          { columns: [fr(1), fr(1)] },
          spread(times([blocks(m.lines(m.heading(1, 'X'), inline(lines(2)), m.heading(1, 'Y'), inline(lines(2))))], 2)),
        ),
        blocks(m.heading(1, 'E')),
        blocks(m.heading(1, 'F')),
      ),
    ),
  )
}
