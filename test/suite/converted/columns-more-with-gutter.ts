// Converted from test/suite/corpus/columns-more-with-gutter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  circle,
  cm,
  columns,
  doc,
  eastern,
  external,
  inline,
  m,
  page,
  parbreak,
  pct,
  pt,
  rect,
  set,
  space,
} from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  return doc(
    m.lines(set(page, { height: cm(3.25), width: cm(7.05), columns: 3 }), set(columns, { gutter: pt(30) })),
    inline(
      rect({ width: pct(100), height: cm(2.5), fill: conifer }),
      space,
      parbreak(),
      space,
      rect({ width: pct(100), height: cm(2), fill: eastern }),
      space,
      parbreak(),
      space,
      circle({ fill: eastern }),
    ),
  )
}
