// Converted from test/suite/corpus/show-function-order-with-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, codeBlock, doc, inline, m, red, set, show, strong, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(strong, (it, ctx) => codeBlock([set(text, { fill: red })], it)),
      inline`Hello ${strong(inline`World`)}`,
    ),
    m.lines(
      show(strong, (it_2, ctx_2) => codeBlock([set(text, { fill: blue })], it_2)),
      inline`Hello ${strong(inline`World`)}`,
    ),
  )
}
