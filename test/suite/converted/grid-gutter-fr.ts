// Converted from test/suite/corpus/grid-gutter-fr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, eastern, external, fr, grid, inline, m, pct, pt, rect, rgb, set } from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  return doc(
    m.lines(
      set(rect, { inset: pt(0) }),
      inline(
        grid(
          { columns: [auto, auto, pct(40)], columnGutter: fr(1), rowGutter: fr(1) },
          rect({ fill: eastern }, inline`dddaa aaa aaa`),
          rect({ fill: conifer }, inline`ccc`),
          rect({ fill: rgb('dddddd') }, inline`aaa`),
        ),
      ),
    ),
  )
}
