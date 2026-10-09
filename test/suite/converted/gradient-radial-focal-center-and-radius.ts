// Converted from test/suite/corpus/gradient-radial-focal-center-and-radius.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { circle, doc, gradient, inline, pct, pt, rgb, space, white } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      circle({
        radius: pt(25),
        fill: gradient.radial({ focalCenter: [pct(35), pct(35)], focalRadius: pct(5) }, white, rgb('#8fbc8f')),
      }),
      space,
      circle({
        radius: pt(25),
        fill: gradient.radial({ focalCenter: [pct(75), pct(35)], focalRadius: pct(5) }, white, rgb('#8fbc8f')),
      }),
    ),
  )
}
