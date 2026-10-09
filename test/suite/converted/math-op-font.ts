// Converted from test/suite/corpus/math-op-font.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, let_, m, math, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [colimDecl, colim] = let_(
    'colim',
    math.op({ limits: true }, text({ font: 'IBM Plex Sans', weight: 'regular', size: em(0.8) }, inline`colim`)),
  )
  return doc(m.lines(colimDecl, inline(unsafeRaw.math.block`colim_(x -> 0) inline(colim_(x -> 0))`)))
}
