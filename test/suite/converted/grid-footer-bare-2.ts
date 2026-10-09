// Converted from test/suite/corpus/grid-footer-bare-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, pt, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(table(table.footer(inline`a`, inline`b`, inline`c`))),
    inline(table({ gutter: pt(3) }, table.footer(inline`a`, inline`b`, inline`c`))),
  )
}
