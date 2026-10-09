// Converted from test/suite/corpus/math-primes-merge-inner-prime.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`attach(attach(a, tr: '), t: b, tr: c)
  quad
  attach(attach(a, tr: ', t: b), tr: ')
  quad
  attach(attach(a, tr: c, t: b), tr: ')`),
  )
}
