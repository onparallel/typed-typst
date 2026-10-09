// Converted from test/suite/corpus/math-nested-normal-layout.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, image, inline, let_, m, move, path, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [monkeyDecl, monkey] = let_(
    'monkey',
    move({ dy: em(0.2) }, image({ height: em(1) }, path('/assets/images/monkey.svg'))),
  )
  return doc(m.lines(monkeyDecl, inline(unsafeRaw.math.block`sum_(i=#emoji.apple)^#emoji.apple.red i + monkey/2`)))
}
