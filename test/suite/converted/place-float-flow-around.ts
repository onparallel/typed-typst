// Converted from test/suite/corpus/place-float-flow-around.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bottom,
  center,
  define,
  doc,
  inline,
  m,
  page,
  place,
  pt,
  rect,
  set,
  space,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { height: pt(80) }),
      set(place, { float: true }),
      inline(place(add(bottom, center), rect({ height: pt(20) })), space, lines(4)),
    ),
  )
}
