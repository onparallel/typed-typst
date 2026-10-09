// Converted from test/suite/corpus/math-primes-merge-top-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`attach(a, b: 1, tr: ', t: 2)
  quad        attach(attach(b, b: 1, tr: '), t: 2)
  quad        attach(attach(c, b: 1), tr: ', t: 2)
  quad attach(attach(attach(d, b: 1), tr: '), t: 2)
  \\
              attach(attach(e, b: 1, t: 2), tr: ')
  quad attach(attach(attach(f, b: 1), t: 2), tr: ')`),
  )
}
