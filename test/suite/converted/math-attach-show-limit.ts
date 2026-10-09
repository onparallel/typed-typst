// Converted from test/suite/corpus/math-attach-show-limit.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, math, show, space, sym, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [eqDecl, eq] = let_('eq', unsafeRaw.math.block`∫_a^b iota_a^b`)
  return doc(
    m.lines(
      eqDecl,
      inline(
        eq,
        space,
        show('∫', math.limits),
        space,
        show(sym.iota, math.limits.with({ inline: false })),
        space,
        eq,
        space,
        unsafeRaw.math`iota_a^b`,
      ),
    ),
  )
}
