// Converted from test/suite/corpus/math-table.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`x := #table(columns: 2)[x][y]/mat(1, 2, 3)
     = #table[A][B][C]`),
  )
}
