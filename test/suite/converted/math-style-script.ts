// Converted from test/suite/corpus/math-style-script.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math`cal(A) scr(A) bold(cal(O)) scr(bold(O))`),
    m.lines(
      show(math.equation, set(text, { font: 'Noto Sans Math' })),
      inline(unsafeRaw.math`scr(E) cal(E) bold(scr(Y)) cal(bold(Y))`),
    ),
  )
}
