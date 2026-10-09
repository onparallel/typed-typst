// Converted from test/suite/corpus/box-clip-rect.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, em, inline, rect, red } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`Hello ${box({ width: em(1), height: em(1), clip: false }, inline(rect({ width: em(3), height: em(3), fill: red })))}
world 1`,
    'Space',
    inline`Hello ${box({ width: em(1), height: em(1), clip: true }, inline(rect({ width: em(3), height: em(3), fill: red })))}
world 2`,
  )
}
