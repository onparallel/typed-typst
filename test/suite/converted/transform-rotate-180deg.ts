// Converted from test/suite/corpus/transform-rotate-180deg.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  aqua,
  box,
  define,
  deg,
  doc,
  inline,
  linebreak,
  m,
  page,
  pt,
  rotate,
  set,
  space,
} from '../../../src/index.ts'

export default () => {
  const one = define('one')
    .pos('angle', T.any)
    .returns(T.any)
    .body((p) => box({ fill: aqua }, rotate(p['angle'], inline`Test Text${linebreak()} Test Text`)))
  return doc(
    m.lines(set(page, { width: pt(200) }), set(rotate, { reflow: true })),
    m.lines(one.decl, inline(one(deg(0)), space, one(deg(180)))),
    m.list(m.item([one(deg(0))]), m.item([one(deg(180))])),
  )
}
