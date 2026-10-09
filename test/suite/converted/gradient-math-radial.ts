// Converted from test/suite/corpus/gradient-math-radial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  box,
  color,
  doc,
  gradient,
  inline,
  m,
  math,
  pct,
  set,
  show,
  spread,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(
        math.equation,
        set(text, { fill: gradient.radial({ center: [pct(30), pct(30)] }, spread(color.map.rainbow)) }),
      ),
      show(math.equation, box),
    ),
    inline(unsafeRaw.math.block`A = mat(
  1, 2, 3;
  4, 5, 6;
  7, 8, 9
)`),
  )
}
