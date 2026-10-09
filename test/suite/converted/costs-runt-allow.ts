// Converted from test/suite/corpus/costs-runt-allow.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, pagebreak, par, pct, pt, set, space, text } from '../../../src/index.ts'

export default () => {
  const [sampleDecl, sample] = let_('sample', inline`a a a a a a a a a a a a a a a a a a a a a a a a a`)
  return doc(
    m.lines(set(par, { justify: true }), set(text, { size: pt(6) })),
    sampleDecl,
    inline(sample, space, pagebreak(), space, set(text, { costs: { runt: pct(0) } }), space, sample),
  )
}
