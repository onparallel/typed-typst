// Converted from test/suite/corpus/gradient-negative-square-angles.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, spread, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 12 },
        spread(unsafeRaw.code<any>`for i in range(-24,24){(
  rect(width: 3mm, height: 3mm, fill: gradient.linear(yellow, black, angle: i * 15deg).sharp(3)),
)}`),
      ),
    ),
  )
}
