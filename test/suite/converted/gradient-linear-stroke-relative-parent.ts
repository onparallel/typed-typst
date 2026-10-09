// Converted from test/suite/corpus/gradient-linear-stroke-relative-parent.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, align, block, blue, center, circle, doc, gradient, horizon, inline, pt, red } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      align(
        add(center, horizon),
        block(
          { width: pt(50), height: pt(50), fill: gradient.linear(red, blue).sharp(4) },
          circle({ radius: pt(18), stroke: add(pt(5), gradient.linear({ relative: 'parent' }, red, blue).sharp(4)) }),
        ),
      ),
    ),
  )
}
