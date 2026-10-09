// Converted from test/suite/corpus/stack-fr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, fr, h, inline, ltr, m, page, set, spread, stack, unsafeRaw, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: cm(3.5) }),
      inline(stack({ dir: ltr, spacing: fr(1) }, spread(unsafeRaw.code<any>`for c in "ABCDEFGHI" {([#c],)}`))),
    ),
    inline`Hello ${v(fr(2))} from ${h(fr(1))} the ${h(fr(1))} wonderful ${v(fr(1))} World! 🌍`,
  )
}
