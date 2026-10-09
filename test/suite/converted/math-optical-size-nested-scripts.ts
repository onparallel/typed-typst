// Converted from test/suite/corpus/math-optical-size-nested-scripts.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, contentBlock, doc, inline, m, pt, set, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`${contentBlock(blocks(m.lines(set(text, { size: pt(20) }), inline(unsafeRaw.math.block`e^(e^(e^(e)))`))))}
A large number: ${unsafeRaw.math`e^(e^(e^(e)))`}.`)
}
