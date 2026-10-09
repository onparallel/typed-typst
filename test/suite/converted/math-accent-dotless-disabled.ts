// Converted from test/suite/corpus/math-accent-dotless-disabled.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math`hat(i), hat(i, dotless: #false), accent(j, tilde), accent(j, tilde, dotless: #false)`),
  )
}
