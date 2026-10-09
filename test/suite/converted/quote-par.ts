// Converted from test/suite/corpus/quote-par.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, highlight, inline, par, quote, show, space } from '../../../src/index.ts'

export default () => {
  return doc(
    show(par, highlight),
    inline`An inline ${quote(inline`quote.`)}`,
    inline(quote({ block: true, attribution: inline`The Test Author` }, inline`${space}A block-level quote.${space}`)),
  )
}
