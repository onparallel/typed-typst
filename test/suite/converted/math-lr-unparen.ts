// Converted from test/suite/corpus/math-lr-unparen.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [itemDecl, item] = let_('item', unsafeRaw.math`limits(sum)_i`)
  return doc(
    m.lines(
      itemDecl,
      inline(unsafeRaw.math.block`1 / ([item]) quad
  1 /  [item]`),
    ),
  )
}
