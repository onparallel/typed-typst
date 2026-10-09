// Converted from test/suite/corpus/container-layoutable-child.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  aqua,
  block,
  blue,
  box,
  call,
  define,
  doc,
  fr,
  grid,
  inline,
  ltr,
  pt,
  rect,
  stack,
} from '../../../src/index.ts'

export default () => {
  const check = define('check')
    .pos('f', T.any)
    .returns(T.any)
    .body((p) =>
      call(
        p['f'],
        { width: pt(40), height: pt(25), fill: aqua },
        grid(rect({ width: pt(5), height: pt(5), fill: blue })),
      ),
    )
  return doc(check.decl, inline(stack({ dir: ltr, spacing: fr(1) }, check(box), check(block))))
}
