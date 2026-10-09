// Converted from test/suite/corpus/stroke-folding.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  blue,
  box,
  define,
  doc,
  inline,
  m,
  pt,
  set,
  space,
  square,
  teal,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const sq = define('sq')
    .rest('args', T.any)
    .returns(T.any)
    .body((p) => box(unsafeRaw.code<any>`square(size: 10pt, ..args)`))
  return doc(
    sq.decl,
    m.lines(
      set(square, { stroke: null }),
      inline(
        sq(),
        space,
        set(square, { stroke: auto }),
        space,
        sq(),
        space,
        sq({ fill: teal }),
        space,
        sq({ stroke: pt(2) }),
        space,
        sq({ stroke: blue }),
        space,
        sq({ fill: teal, stroke: blue }),
        space,
        sq({ fill: teal, stroke: add(pt(2), blue) }),
      ),
    ),
  )
}
