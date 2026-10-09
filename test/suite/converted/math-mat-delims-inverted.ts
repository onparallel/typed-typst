// Converted from test/suite/corpus/math-mat-delims-inverted.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`mat(delim: ")", 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: \\), 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: paren.r, 1, 2; 3, 4)`,
    ),
    inline(
      unsafeRaw.math.block`mat(delim: "]", 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: \\], 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: bracket.r, 1, 2; 3, 4)`,
    ),
    inline(
      unsafeRaw.math.block`mat(delim: "⟧", 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: bracket.stroked.r, 1, 2; 3, 4)`,
    ),
    inline(
      unsafeRaw.math.block`mat(delim: "}", 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: \\}, 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: brace.r, 1, 2; 3, 4)`,
    ),
    inline(
      unsafeRaw.math.block`mat(delim: "⟩", 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: chevron.r, 1, 2; 3, 4)`,
    ),
  )
}
