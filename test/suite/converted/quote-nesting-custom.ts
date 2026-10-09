// Converted from test/suite/corpus/quote-nesting-custom.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, quote, set, smartquote } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(smartquote, { quotes: { single: ['<', '>'], double: ['(', ')'] } }),
      inline(quote(inline`A ${quote(inline`nested`)} quote`)),
    ),
  )
}
