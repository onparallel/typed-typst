// Converted from test/suite/corpus/page-margin-binding-from-text-lang.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pagebreak, pct, pt, rect, set, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { margin: { inside: pt(30) } }),
      set(text, { lang: 'he' }),
      inline(
        rect({ width: pct(100) }, inline`Bound`),
        space,
        pagebreak(),
        space,
        rect({ width: pct(100) }, inline`Right`),
      ),
    ),
  )
}
