// Converted from test/suite/corpus/list-baseline-big-marker.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, linebreak, list, m, pt, rect, red, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    set(list, { marker: rect({ fill: red, width: pt(10), height: em(4) }) }),
    inline(list(inline())),
    m.list(
      { tight: false },
      m.item(['abc']),
      m.item([
        'A',
        linebreak(),
        space,
        'B',
        linebreak(),
        space,
        'C',
        linebreak(),
        space,
        'D',
        linebreak(),
        space,
        'E',
        linebreak(),
        space,
        'F',
      ]),
    ),
  )
}
