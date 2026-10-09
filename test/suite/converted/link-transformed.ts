// Converted from test/suite/corpus/link-transformed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  box,
  cm,
  deg,
  doc,
  inline,
  let_,
  link,
  m,
  move,
  page,
  pct,
  pt,
  rotate,
  scale,
  set,
} from '../../../src/index.ts'

export default () => {
  const [mylinkDecl, mylink] = let_('mylink', link('https://typst.org/', inline`LINK`))
  return doc(
    m.lines(
      set(page, { height: pt(60) }),
      mylinkDecl,
      inline`My cool ${box(move({ dx: cm(0.7), dy: cm(0.7) }, rotate(deg(10), scale(pct(200), mylink))))}`,
    ),
  )
}
