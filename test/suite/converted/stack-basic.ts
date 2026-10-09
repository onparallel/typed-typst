// Converted from test/suite/corpus/stack-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  btt,
  data,
  define,
  doc,
  inline,
  let_,
  m,
  page,
  pct,
  pt,
  set,
  spread,
  stack,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [widthsDecl, widths] = let_('widths', data([pt(30), pt(20), pt(40), pt(15), pt(30), pct(50), pt(20), pct(100)]))
  const shaded = define('shaded')
    .pos('i', T.any)
    .pos('w', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  let v = (i + 1) * 10%
  rect(width: w, height: 10pt, fill: rgb(v, v, v))
}`,
    )
  return doc(
    widthsDecl,
    shaded.decl,
    unsafeRaw.markup`#let items = for (i, w) in widths.enumerate() {
  (align(right, shaded(i, w)),)
}`,
    m.lines(
      set(page, { width: pt(50), margin: pt(0) }),
      inline(stack({ dir: btt }, spread(unsafeRaw.code<any>`items`))),
    ),
  )
}
