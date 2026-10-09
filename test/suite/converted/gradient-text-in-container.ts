// Converted from test/suite/corpus/gradient-text-in-container.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, box, doc, gradient, inline, m, page, pt, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto, height: auto, margin: pt(10) }),
      show(box, set(text, { fill: unsafeRaw.code<any>`gradient.linear(..color.map.rainbow)` })),
      inline`Hello, ${box(inline`World`)}!`,
    ),
  )
}
