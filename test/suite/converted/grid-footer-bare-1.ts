// Converted from test/suite/corpus/grid-footer-bare-1.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, page, set, table } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { height: em(5) }), inline(table(table.footer(inline`a`, inline`b`, inline`c`)))))
}
