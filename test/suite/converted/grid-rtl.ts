// Converted from test/suite/corpus/grid-rtl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, rtl, set, table, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { dir: rtl }), inline(table({ columns: 2 }, inline`A`, inline`B`, inline`C`, inline`D`))),
  )
}
