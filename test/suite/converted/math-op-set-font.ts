// Converted from test/suite/corpus/math-op-set-font.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, math, set, show, space, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [ligDecl, lig] = let_('lig', math.op('fi'))
  const [testDecl, test] = let_('test', unsafeRaw.math`sech(x) mod_(x -> oo) lig_1(X)`)
  return doc(
    m.lines(
      show(math.equation, set(text, { weight: 'regular' })),
      ligDecl,
      testDecl,
      inline(test, space, show(math.op, set(text, { font: 'New Computer Modern' })), space, test),
    ),
  )
}
