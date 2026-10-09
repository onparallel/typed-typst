// Converted from test/suite/corpus/gradient-linear-angled-aspect-ratio.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { deg, doc, gradient, grid, inline, m, pt, rect, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      unsafeRaw.markup`#let grad = gradient.linear(angle: 135deg, ..color.map.inferno).sharp(6)`,
      inline(
        grid(
          { columns: 2, gutter: pt(5) },
          rect({ width: pt(70), height: pt(70), fill: unsafeRaw.code<any>`grad` }),
          rect({ width: pt(25), height: pt(70), fill: unsafeRaw.code<any>`grad` }),
          rect({ width: pt(70), height: pt(25), fill: unsafeRaw.code<any>`grad` }),
        ),
      ),
    ),
  )
}
