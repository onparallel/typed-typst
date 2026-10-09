// Converted from test/suite/corpus/math-optical-size-primes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, space, symbol, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [primeDecl, prime] = let_('prime', inline(space, symbol('′'), space))
  const [dprimeDecl, dprime] = let_('dprime', inline(space, symbol('″'), space))
  const [tprimeDecl, tprime] = let_('tprime', inline(space, symbol('‴'), space))
  return doc(
    m.lines(
      primeDecl,
      dprimeDecl,
      tprimeDecl,
      inline(
        unsafeRaw.math.block`y^dprime-2y^prime + y = 0`,
        space,
        unsafeRaw.math`y^dprime-2y^prime + y = 0`,
        space,
        unsafeRaw.math.block`y^tprime_3 + g^(prime 2)`,
      ),
    ),
  )
}
