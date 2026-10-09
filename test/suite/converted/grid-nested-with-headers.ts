// Converted from test/suite/corpus/grid-nested-with-headers.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, linebreak, m, page, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(10) }),
      inline(
        table(
          table.header(inline`a`),
          table(table.header(inline`b`), inline`a${linebreak()} b${linebreak()} c${linebreak()} d`),
        ),
      ),
    ),
  )
}
