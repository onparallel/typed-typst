// Converted from test/suite/corpus/costs-widow-orphan.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, lorem, page, pagebreak, pct, pt, set, space, text } from '../../../src/index.ts'

export default () => {
  const [sampleDecl, sample] = let_('sample', lorem(12))
  return doc(
    set(page, { height: pt(60) }),
    sampleDecl,
    inline(sample, space, pagebreak(), space, set(text, { costs: { widow: pct(0), orphan: pct(0) } }), space, sample),
  )
}
