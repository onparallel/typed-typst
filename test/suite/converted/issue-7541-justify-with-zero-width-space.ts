// Converted from test/suite/corpus/issue-7541-justify-with-zero-width-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  blue,
  doc,
  em,
  h,
  inline,
  let_,
  m,
  minus,
  pad,
  page,
  par,
  pct,
  pt,
  rect,
  set,
  sym,
} from '../../../src/index.ts'

export default () => {
  const [spaceDecl, space_2] = let_('space', h(minus(pct(100), em(3.1))))
  return doc(
    m.lines(
      set(page, { background: pad(pt(10), rect({ width: pct(100), height: pct(100), stroke: add(pt(0.5), blue) })) }),
      set(par, { justify: true }),
    ),
    spaceDecl,
    inline`${space_2}Foo Bar Buzz`,
    inline`${space_2}Foo Bar${sym.zws}Buzz`,
  )
}
