// Converted from test/suite/corpus/math-class-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, math, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [normalDecl, normal] = let_('normal', math.class.with('normal'))
  const [pluseqDecl, pluseq] = let_('pluseq', unsafeRaw.math`class("binary", normal(+) normal(=))`)
  return doc(m.lines(normalDecl, pluseqDecl, inline(unsafeRaw.math.block`a pluseq 5`)))
}
