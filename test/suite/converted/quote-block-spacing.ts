// Converted from test/suite/corpus/quote-block-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, pt, quote, set, space, text } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(set(quote, { block: true }), set(text, { size: pt(8) })),
    inline(lines(3), space, quote(lines(3)), space, lines(3)),
  )
}
