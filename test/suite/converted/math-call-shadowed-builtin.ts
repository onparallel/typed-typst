// Converted from test/suite/corpus/math-call-shadowed-builtin.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [boxDecl, box_2] = let_('box', 'box')
  return doc(m.lines(boxDecl, inline(unsafeRaw.math.block`box()`)))
}
