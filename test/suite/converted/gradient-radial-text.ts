// Converted from test/suite/corpus/gradient-radial-text.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, blue, doc, gradient, inline, lorem, m, page, par, pt, red, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(200), height: auto, margin: pt(10) }),
      set(par, { justify: true }),
      set(text, { fill: gradient.radial(red, blue) }),
      inline(lorem(30)),
    ),
  )
}
