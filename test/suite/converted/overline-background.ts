// Converted from test/suite/corpus/overline-background.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, overline, red, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(overline, { background: true, stroke: { thickness: em(0.5), paint: red, cap: 'round' } }),
      inline(overline(inline`This is in the background`)),
    ),
  )
}
