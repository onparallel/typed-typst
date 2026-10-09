// Converted from test/suite/corpus/text-size-em.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  codeBlock,
  doc,
  em,
  fr,
  inline,
  let_,
  ltr,
  m,
  minus,
  pt,
  red,
  set,
  square,
  stack,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [sizeDecl, size] = let_('size', add(em(0.25), pt(1)))
  const [sizeDecl_2, size_2] = let_(
    'size',
    codeBlock([
      sizeDecl,
      unsafeRaw.code<any>`for _ in range(3) {
    size *= 2
  }`,
      minus(size, pt(3)),
    ]),
  )
  return doc(
    m.lines(set(text, { size: pt(5) }), set(text, { size: em(2) }), set(square, { fill: red })),
    sizeDecl_2,
    inline(stack({ dir: ltr, spacing: fr(1) }, square({ size: size_2 }), square({ size: pt(25) }))),
  )
}
