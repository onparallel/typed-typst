// Converted from test/suite/corpus/math-mat-delims.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`mat(delim: #none, 1, 2; 3, 4)`),
    inline(
      unsafeRaw.math.block`mat(delim: "(", 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: \\(, 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: paren.l, 1, 2; 3, 4)`,
    ),
    inline(
      unsafeRaw.math.block`mat(delim: "[", 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: \\[, 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: bracket.l, 1, 2; 3, 4)`,
    ),
    inline(
      unsafeRaw.math.block`mat(delim: "⟦", 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: bracket.stroked.l, 1, 2; 3, 4)`,
    ),
    inline(
      unsafeRaw.math.block`mat(delim: "{", 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: \\{, 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: brace.l, 1, 2; 3, 4)`,
    ),
    inline(
      unsafeRaw.math.block`mat(delim: "|", 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: \\|, 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: bar.v, 1, 2; 3, 4)`,
    ),
    inline(
      unsafeRaw.math.block`mat(delim: "‖", 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: bar.v.double, 1, 2; 3, 4)`,
    ),
    inline(
      unsafeRaw.math.block`mat(delim: "⟨", 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: chevron.l, 1, 2; 3, 4)`,
    ),
  )
}
