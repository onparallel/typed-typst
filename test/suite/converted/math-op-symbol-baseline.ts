// Converted from test/suite/corpus/math-op-symbol-baseline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [expectDecl, expect] = let_('expect', unsafeRaw.math`op(EE)`)
  return doc(m.lines(expectDecl, inline(unsafeRaw.math`expect A`)))
}
