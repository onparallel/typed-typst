// Converted from test/suite/corpus/grid-nested-with-footers.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, em, inline, linebreak, m, page, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(10), width: auto }),
      inline(
        table(
          table(inline`a${linebreak()} b${linebreak()} c${linebreak()} d`, table.footer(inline`b`)),
          table.footer(inline`a`),
        ),
      ),
    ),
  )
}
