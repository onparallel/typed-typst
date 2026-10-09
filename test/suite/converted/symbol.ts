// Converted from test/suite/corpus/symbol.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emoji, inline, m, set, space, sym, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(emoji.face, space, emoji.woman.old, space, emoji.turtle),
    m.lines(
      set(text, { font: 'New Computer Modern Math' }),
      inline(sym.arrow, space, sym.arrow.l, space, sym.arrow.r.squiggly, space, sym.arrow.tr.hook),
    ),
    inline`${sym.arrow.r}this and this${sym.arrow.l}`,
  )
}
