// Converted from test/suite/corpus/table-tags-show-rule.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, pt, set, show, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(table, { columns: [pt(10), auto] }),
      show(table, (it, ctx) => it.columns),
      inline(table(inline`A`, inline`B`, inline`C`, inline`D`)),
    ),
  )
}
