// Converted from test/suite/corpus/math-mat-align-signed-numbers.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`mat(-1, 1, 1; 1, -1, 1; 1, 1, -1)`,
      space,
      unsafeRaw.math.block`mat(-1&, 1&, 1&; 1&, -1&, 1&; 1&, 1&, -1&)`,
      space,
      unsafeRaw.math.block`mat(-1&, 1&, 1&; 1, -1, 1; 1, 1, -1)`,
      space,
      unsafeRaw.math.block`mat(&-1, &1, &1; 1, -1, 1; 1, 1, -1)`,
    ),
  )
}
