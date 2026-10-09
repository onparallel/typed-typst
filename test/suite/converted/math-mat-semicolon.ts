// Converted from test/suite/corpus/math-mat-semicolon.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, center, doc, inline, m, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(align, { alignment: center }),
      inline(unsafeRaw.math`mat() dot
 mat(;) dot
 mat(1, 2) dot
 mat(1, 2;) \\
 mat(1; 2) dot
 mat(1, 2; 3, 4) dot
 mat(1 + &2, 1/2; &3, 4)`),
    ),
  )
}
