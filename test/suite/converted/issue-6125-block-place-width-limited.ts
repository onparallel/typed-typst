// Converted from test/suite/corpus/issue-6125-block-place-width-limited.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  aqua,
  block,
  blue,
  box,
  codeBlock,
  doc,
  fr,
  inline,
  let_,
  m,
  page,
  place,
  pt,
  set,
  space,
  square,
  top,
} from '../../../src/index.ts'

export default () => {
  const [bDecl, b] = let_(
    'b',
    block(
      codeBlock([square({ size: pt(20), fill: aqua }), place(top, box({ height: pt(10), width: fr(1), fill: blue }))]),
    ),
  )
  return doc(m.lines(set(page, { height: pt(70) }), bDecl, inline(b, space, b)))
}
