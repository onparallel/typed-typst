// Converted from test/suite/corpus/fold-vec-order-text-decos.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, aqua, doc, inline, pt, space, underline } from '../../../src/index.ts'

export default () => {
  return doc(inline(underline({ stroke: add(aqua, pt(4)) }, inline(space, underline(inline`Hello`), space))))
}
