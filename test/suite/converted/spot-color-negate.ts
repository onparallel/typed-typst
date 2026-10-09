// Converted from test/suite/corpus/spot-color-negate.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { color, doc, inline, let_, m, pct, rgb, space, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [pantoneDecl, pantone] = let_('pantone', color.spot('PANTONE 185 C', rgb(pct(89.4), pct(0.7), pct(17))))
  const [epsDecl, eps] = let_('eps', times(0.0001, pct(100)))
  return doc(
    m.lines(
      pantoneDecl,
      unsafeRaw.markup`#let base = pantone.tint(70%)`,
      unsafeRaw.markup`#let neg = base.negate()`,
      epsDecl,
      unsafeRaw.markup`#let components = neg.components()`,
      inline(
        unsafeRaw.code<any>`if components.len() != 1 { panic("expected 1 component, got " + components.len()) }`,
        space,
        unsafeRaw.code<any>`if calc.abs(components.at(0) - 30%) > eps { panic("spot color negation failed") }`,
      ),
    ),
  )
}
