// Converted from test/suite/corpus/grid-subheaders-alone-with-footer-no-orphan-prevention.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, page, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(5.3) }),
      inline(table(table.header(inline`L1`), table.header({ level: 2 }, inline`L2`), table.footer(inline`a`))),
    ),
  )
}
