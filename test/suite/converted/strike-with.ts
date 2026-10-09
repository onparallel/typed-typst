// Converted from test/suite/corpus/strike-with.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, call, doc, em, inline, let_, m, pt, rgb, strike } from '../../../src/index.ts'

export default () => {
  const [redactDecl, redact] = let_('redact', strike.with({ stroke: pt(10), extent: em(0.05) }))
  const [highlightCustomDecl, highlightCustom] = let_(
    'highlight-custom',
    strike.with({ stroke: add(pt(10), rgb('abcdef88')), extent: em(0.05) }),
  )
  return doc(
    m.lines(redactDecl, highlightCustomDecl),
    inline`Sometimes, we work ${call(redact, inline`in secret`)}. There might be ${call(highlightCustom, inline`redacted`)}
things.`,
  )
}
