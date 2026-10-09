// Converted from test/suite/corpus/figure-tags-inline-equation-with-caption.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, inline, math, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      figure(
        { caption: inline`Some caption` },
        math.equation(
          { alt: 'The Pythagorean theorem: a squared plus b squared is c squared' },
          unsafeRaw.math`a^2 + b^2 = c^2`,
        ),
      ),
    ),
  )
}
