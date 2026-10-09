// Converted from test/suite/corpus/set-vs-construct-1.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, list, m, par, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(par, { leading: pt(2) }),
      inline(list({ bodyIndent: pt(20) }, inline`First`, list(inline`A`, inline`B`))),
    ),
  )
}
