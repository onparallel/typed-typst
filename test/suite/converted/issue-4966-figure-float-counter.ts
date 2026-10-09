// Converted from test/suite/corpus/issue-4966-figure-float-counter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  bottom,
  center,
  circle,
  context,
  counter,
  doc,
  figure,
  image,
  inline,
  let_,
  m,
  set,
  square,
  top,
  where,
} from '../../../src/index.ts'

export default () => {
  const [cDecl, c] = let_(
    'c',
    context((ctx) => counter(where(figure, { kind: image })).display(ctx)),
  )
  return doc(
    m.lines(cDecl, set(align, { alignment: center })),
    inline(c),
    inline(figure({ placement: bottom, caption: inline`A` }, square(c))),
    inline(c),
    inline(figure({ placement: top, caption: inline`B` }, circle(c))),
    inline(c),
  )
}
