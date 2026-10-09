// Converted from test/suite/corpus/math-primes-after-code-expr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [gDecl, g] = let_('g', unsafeRaw.math`f`)
  const [ggDecl, gg] = let_('gg', unsafeRaw.math`f`)
  return doc(
    m.lines(gDecl, ggDecl),
    inline(unsafeRaw.math.block`#(g)' #g' #g ' \\
  #g''''''''''''''''' \\
  gg'`),
  )
}
