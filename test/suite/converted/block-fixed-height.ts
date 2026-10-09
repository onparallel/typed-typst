// Converted from test/suite/corpus/block-fixed-height.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  aqua,
  block,
  center,
  colbreak,
  define,
  doc,
  inline,
  m,
  page,
  pct,
  pt,
  set,
  space,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(set(page, { height: pt(100) }), set(align, { alignment: center })),
    inline(
      lines(3),
      space,
      block({ width: pct(80), height: pt(60), fill: aqua }),
      space,
      lines(2),
      space,
      block({ breakable: false, width: pct(100), inset: pt(4), fill: aqua }, add(lines(3), colbreak())),
    ),
  )
}
