// Converted from test/suite/corpus/underline-background.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, red, set, underline } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(underline, { background: true, stroke: { thickness: em(0.5), paint: red, cap: 'round' } }),
      inline(underline(inline`This is in the background`)),
    ),
  )
}
