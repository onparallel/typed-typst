// Converted from test/suite/corpus/place-float-twocolumn-queued.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  aqua,
  center,
  define,
  doc,
  external,
  inline,
  left,
  m,
  page,
  place,
  pt,
  rect,
  right,
  set,
  space,
  top,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  const t = define('t')
    .pos('align', T.any)
    .pos('fill', T.any)
    .returns(T.any)
    .body((p) => place(add(top, p['align']), rect({ fill: p['fill'], height: pt(25) })))
  const forest = external('forest')
  const conifer = external('conifer')
  return doc(
    m.lines(
      set(page, { height: pt(100), columns: 2 }),
      set(place, { float: true, scope: 'parent', clearance: pt(10) }),
      t.decl,
    ),
    inline(t(left, aqua), space, t(center, forest), space, t(right, conifer), space, lines(7)),
  )
}
