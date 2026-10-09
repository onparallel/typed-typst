// Converted from test/suite/corpus/issue-1833-locate-place.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bottom,
  codeBlock,
  context,
  define,
  doc,
  here,
  inline,
  m,
  page,
  place,
  pt,
  rect,
  right,
  set,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { height: pt(60) }),
      inline(
        context((ctx) =>
          codeBlock([place(add(right, bottom), rect()), test(here(ctx).position(), { page: 1, x: pt(10), y: pt(10) })]),
        ),
      ),
    ),
  )
}
