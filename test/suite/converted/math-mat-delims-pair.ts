// Converted from test/suite/corpus/math-mat-delims-pair.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`mat(delim: #(none, "["), 1, 2; 3, 4)`,
      space,
      unsafeRaw.math.block`mat(delim: #(sym.chevron.r, sym.bracket.stroked.r), 1, 2; 3, 4)`,
    ),
  )
}
