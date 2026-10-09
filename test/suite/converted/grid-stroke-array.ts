// Converted from test/suite/corpus/grid-stroke-array.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, green, inline, let_, m, red, rtl, set, space, table, text } from '../../../src/index.ts'

export default () => {
  const [tDecl, t] = let_(
    't',
    table(
      { columns: 3, stroke: [red, blue, green] },
      inline`a`,
      inline`b`,
      inline`c`,
      inline`d`,
      inline`e`,
      inline`f`,
      inline`h`,
      inline`i`,
      inline`j`,
    ),
  )
  return doc(m.lines(tDecl, inline(t, space, set(text, { dir: rtl }), space, t)))
}
