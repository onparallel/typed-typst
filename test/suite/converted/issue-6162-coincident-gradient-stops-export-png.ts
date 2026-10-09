// Converted from test/suite/corpus/issue-6162-coincident-gradient-stops-export-png.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, gradient, green, inline, pct, rect, red, space, white } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      rect({ fill: gradient.linear([red, pct(0)], [green, pct(0)], [blue, pct(100)]) }),
      space,
      rect({ fill: gradient.linear([red, pct(0)], [green, pct(100)], [blue, pct(100)]) }),
      space,
      rect({ fill: gradient.linear([white, pct(0)], [red, pct(50)], [green, pct(50)], [blue, pct(100)]) }),
    ),
  )
}
