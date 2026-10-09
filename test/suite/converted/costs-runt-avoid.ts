// Converted from test/suite/corpus/costs-runt-avoid.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, pagebreak, par, pct, set, space, text } from '../../../src/index.ts'

export default () => {
  const [sampleDecl, sample] = let_('sample', inline`please avoid runts in this text.`)
  return doc(
    set(par, { justify: true }),
    sampleDecl,
    inline(sample, space, pagebreak(), space, set(text, { costs: { runt: pct(10000) } }), space, sample),
  )
}
