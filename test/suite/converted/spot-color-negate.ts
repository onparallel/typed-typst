// Converted from test/suite/corpus/spot-color-negate.typ by scripts/convert-suite.ts — do not edit.
import { color, doc, inline, let_, m, pct, rgb, space, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [pantoneDecl, pantone] = let_('pantone', color.spot('PANTONE 185 C', rgb(pct(89.4), pct(0.7), pct(17))))
  const [epsDecl, eps] = let_('eps', times(0.0001, pct(100)))
  return doc(
    m.lines(
      pantoneDecl,
      let_('base', unsafeRaw.code<any>`pantone.tint(70%)`)[0],
      let_('neg', unsafeRaw.code<any>`base.negate()`)[0],
      epsDecl,
      let_('components', unsafeRaw.code<any>`neg.components()`)[0],
      inline(
        unsafeRaw.code<any>`if components.len() != 1 { panic("expected 1 component, got " + components.len()) }`,
        space,
        unsafeRaw.code<any>`if calc.abs(components.at(0) - 30%) > eps { panic("spot color negation failed") }`,
      ),
    ),
  )
}
