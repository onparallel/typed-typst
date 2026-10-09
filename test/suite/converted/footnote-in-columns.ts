// Converted from test/suite/corpus/footnote-in-columns.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  center,
  define,
  doc,
  footnote,
  inline,
  page,
  place,
  pt,
  set,
  space,
  strong,
  top,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').rest('args', T.any).returns(T.any).external()
  return doc(
    set(page, { height: pt(120), columns: 2 }),
    inline(place({ float: true, scope: 'parent', clearance: pt(12) }, add(top, center), strong(inline`Title`))),
    inline(lines(3), space, footnote(lines(4, '1'))),
    inline(lines(2), space, footnote(lines(2, '1'))),
  )
}
