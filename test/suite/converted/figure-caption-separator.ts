// Converted from test/suite/corpus/figure-caption-separator.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, inline, set, space, sym, table } from '../../../src/index.ts'

export default () => {
  return doc(
    set(figure.caption, { separator: inline`${space}---${space}` }),
    inline(figure({ caption: inline`The table with custom separator.` }, table({ columns: 2 }, inline`a`, inline`b`))),
  )
}
