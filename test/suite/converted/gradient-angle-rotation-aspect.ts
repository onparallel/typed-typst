// Converted from test/suite/corpus/gradient-angle-rotation-aspect.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, center, cm, deg, doc, gradient, grid, horizon, inline, mm, rect, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: [cm(1), cm(1)], rows: mm(5), gutter: mm(1), align: add(center, horizon) },
        rect({
          width: cm(1),
          height: mm(5),
          fill: unsafeRaw.code<any>`gradient.linear(angle: 60deg, ..color.map.spectral)`,
        }),
        rect({
          width: cm(1),
          height: mm(5),
          fill: unsafeRaw.code<any>`gradient.linear(angle: 120deg, ..color.map.spectral)`,
        }),
        rect({
          width: cm(1),
          height: mm(5),
          fill: unsafeRaw.code<any>`gradient.linear(angle: 300deg, ..color.map.spectral)`,
        }),
        rect({
          width: cm(1),
          height: mm(5),
          fill: unsafeRaw.code<any>`gradient.linear(angle: 240deg, ..color.map.spectral)`,
        }),
      ),
    ),
  )
}
