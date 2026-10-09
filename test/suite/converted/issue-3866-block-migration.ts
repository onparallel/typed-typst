// Converted from test/suite/corpus/issue-3866-block-migration.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  block,
  columns,
  define,
  doc,
  inline,
  m,
  page,
  pct,
  pt,
  rect,
  set,
  space,
  text,
  v,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { height: pt(120) }),
      set(text, { costs: { widow: pct(0), orphan: pct(0) } }),
      inline(
        v(pt(50)),
        space,
        columns(
          2,
          inline(
            space,
            lines(6),
            space,
            block({ breakable: false }, rect({ width: pct(80), height: pt(80) })),
            space,
            lines(6),
            space,
          ),
        ),
      ),
    ),
  )
}
