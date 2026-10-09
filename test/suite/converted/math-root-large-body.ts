// Converted from test/suite/corpus/math-root-large-body.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`sqrt([|x|]^2 + [|y|]^2) < [|z|]`,
      space,
      unsafeRaw.math.block`v = sqrt((1/2) / (4/5))
   = root(3, (1/2/3) / (4/5/6))
   = root(4, ((1/2) / (3/4)) / ((1/2) / (3/4)))`,
      space,
      unsafeRaw.math.block`v = sqrt(a +\\ b)`,
    ),
  )
}
