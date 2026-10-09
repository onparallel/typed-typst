// Converted from test/suite/corpus/block-sticky-many.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(80) }),
      set(block, { sticky: true }),
      inline`${block(inline`A`)} ${block(inline`B`)} ${block(inline`C`)} ${block(inline`D`)} E ${block(inline`F`)}
${block(inline`G`)}`,
    ),
  )
}
