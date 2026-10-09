// Converted from test/suite/corpus/show-set-on-layoutable-element.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, pad, red, set, show, table, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(table, set(text, { fill: red })),
      inline(pad(table({ columns: 4 }, inline`A`, inline`B`, inline`C`, inline`D`))),
    ),
  )
}
