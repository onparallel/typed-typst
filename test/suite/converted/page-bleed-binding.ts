// Converted from test/suite/corpus/page-bleed-binding.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, page, pagebreak, pct, pt, rect, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, {
      bleed: { inside: pt(10), outside: pt(5), top: pt(5), bottom: pt(5) },
      margin: { outside: pt(10), inside: pt(5), top: pt(10), bottom: pt(10) },
    }),
    inline(rect({ width: pct(100) }), space, pagebreak(), space, rect({ width: pct(100) })),
  )
}
