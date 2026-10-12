// Converted from test/suite/corpus/math-primes-spaces.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`${unsafeRaw.math`a' ' '`}, ${unsafeRaw.math`' ' '`}, ${unsafeRaw.math`a' '/b`}`)
}
