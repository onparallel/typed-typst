// Converted from test/suite/corpus/math-size.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math`a/b, display(a/b), display(a)/display(b), inline(a/b), script(a/b), sscript(a/b) \\
 mono(script(a/b)), script(mono(a/b))\\
 script(a^b, cramped: #true), script(a^b, cramped: #false)`),
  )
}
