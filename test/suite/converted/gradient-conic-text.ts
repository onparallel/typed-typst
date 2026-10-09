// Converted from test/suite/corpus/gradient-conic-text.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, blue, deg, doc, gradient, inline, lorem, m, page, par, pt, red, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(200), height: auto, margin: pt(10) }),
      set(par, { justify: true }),
      set(text, { fill: gradient.conic({ angle: deg(45) }, red, blue) }),
      inline(lorem(30)),
    ),
  )
}
