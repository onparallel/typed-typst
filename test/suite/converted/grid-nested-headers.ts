// Converted from test/suite/corpus/grid-nested-headers.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, linebreak, m, page, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(12) }),
      inline(table(table.header(table(table.header(inline`b`), inline`c`, inline`d`)), inline`a${linebreak()} b`)),
    ),
  )
}
