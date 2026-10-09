// Converted from test/suite/corpus/math-mat-align-explicit-mixed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { data, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [dataDecl, data_2] = let_(
    'data',
    data([
      [unsafeRaw.math`&18&&.02`, unsafeRaw.math`1`, unsafeRaw.math`+1`],
      [unsafeRaw.math`-&9&&.3`, unsafeRaw.math`-1`, unsafeRaw.math`-&21`],
      [unsafeRaw.math`&&&.011`, unsafeRaw.math`1`, unsafeRaw.math`&0`],
    ]),
  )
  return doc(
    m.lines(
      dataDecl,
      inline(
        unsafeRaw.math.block`#math.mat(align: left, ..data)`,
        space,
        unsafeRaw.math.block`#math.mat(align: center, ..data)`,
        space,
        unsafeRaw.math.block`#math.mat(align: right, ..data)`,
      ),
    ),
  )
}
