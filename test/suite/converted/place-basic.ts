// Converted from test/suite/corpus/place-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  block,
  bottom,
  center,
  cm,
  define,
  doc,
  eastern,
  external,
  fr,
  h,
  inline,
  m,
  page,
  pct,
  place,
  pt,
  rect,
  right,
  set,
  space,
  stack,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  const conifer = external('conifer')
  const forest = external('forest')
  return doc(
    m.lines(set(page, { paper: 'a8' }), inline(place(add(bottom, center), inline`E`))),
    m.lines(m.heading(1, 'A'), inline(place(right, rect({ width: cm(1.8) })), space, lines(5))),
    inline(
      stack(
        rect({ fill: eastern, height: pt(10), width: pct(100) }),
        place({ dy: pt(1.5) }, right, inline`ABC`),
        rect({ fill: conifer, height: pt(10), width: pct(80) }),
        rect({ fill: forest, height: pt(10), width: pct(100) }),
        pt(10),
        block(inline`${space}${place({ dx: pt(-7), dy: pt(-5) }, center, inline`A`)} ${place({ dx: pt(7), dy: pt(5) }, center, inline`B`)}
C ${h(fr(1))} D${space}`),
      ),
    ),
  )
}
