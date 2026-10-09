// Converted from test/suite/corpus/math-style-font-no-dotless.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(text, { font: 'Libertinus Math' })),
      inline(unsafeRaw.math.block`dotless.i dotless.j, upright(dotless.i dotless.j),
  scr(dotless.i dotless.j), cal(dotless.i dotless.j),
  frak(dotless.i dotless.j), mono(dotless.i dotless.j),
  upright(bold(dotless.i dotless.j)), bold(upright(sans(dotless.i dotless.j)))`),
    ),
  )
}
