// Converted from test/suite/corpus/issue-5723-grid-heading-numbering.typ by scripts/convert-suite.ts — do not edit.
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
        blocks(heading({ depth: 1 }, inline('A'))),
        blocks(heading({ depth: 1 }, inline('B'))),
        blocks(m.lines(heading({ depth: 1 }, inline('C')), inline(lines(4)), heading({ depth: 1 }, inline('D')))),
        table(
          { columns: [fr(1), fr(1)] },
          spread(
            times(
              [
                blocks(
                  m.lines(
                    heading({ depth: 1 }, inline('X')),
                    inline(lines(2)),
                    heading({ depth: 1 }, inline('Y')),
                    inline(lines(2)),
                  ),
                ),
              ],
              2,
            ),
          ),
        ),
        blocks(heading({ depth: 1 }, inline('E'))),
        blocks(heading({ depth: 1 }, inline('F'))),
      ),
    ),
  )
}
