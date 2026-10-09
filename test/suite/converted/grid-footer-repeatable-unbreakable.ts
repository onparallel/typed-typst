// Converted from test/suite/corpus/grid-footer-repeatable-unbreakable.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, em, inline, m, page, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(8), width: auto }),
      inline(table(inline`h`, table.footer(inline`a`, inline`b`, inline`c`))),
    ),
  )
}
