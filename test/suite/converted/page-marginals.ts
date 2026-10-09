// Converted from test/suite/corpus/page-marginals.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  auto,
  center,
  codeBlock,
  context,
  counter,
  define,
  doc,
  eastern,
  em,
  emph,
  fr,
  h,
  inline,
  m,
  page,
  pt,
  set,
  strong,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    set(page, {
      paper: 'a8',
      margin: { x: pt(15), y: pt(30) },
      header: codeBlock([
        text({ fill: eastern }, inline(strong(inline`Typst`))),
        h(fr(1)),
        text({ size: em(0.8) }, inline(emph(inline`Chapter 1`))),
      ]),
      footer: context((ctx) => align(center, inline`~ ${counter(page).display(ctx)} ~`)),
      background: unsafeRaw.code<any>`context if counter(page).get().first() <= 2 {
    place(center + horizon, circle(radius: 1cm, fill: luma(90%)))
  }`,
    }),
    inline(align(center, lines(20))),
    m.lines(set(page, { header: null, height: auto, margin: { top: pt(15), bottom: pt(25) } }), 'Z'),
  )
}
