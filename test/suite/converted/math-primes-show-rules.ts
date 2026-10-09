// Converted from test/suite/corpus/math-primes-show-rules.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, inline, m, math, red, set, show, space, sym, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.primes, set(text, { fill: red })),
      inline(
        unsafeRaw.math.block`x' x'' x''' x'''' x''''' x''''''`,
        space,
        show(sym.prime, set(text, { fill: blue })),
        space,
        unsafeRaw.math.block`x' x'' x''' x'''' x''''' x''''''`,
      ),
    ),
  )
}
