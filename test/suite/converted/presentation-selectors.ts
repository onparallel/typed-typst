// Converted from test/suite/corpus/presentation-selectors.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emoji, inline, linebreak, space, sym } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(sym.copyright, space, emoji.copyright, space, linebreak(), space, sym.suit.heart, space, emoji.suit.heart),
  )
}
