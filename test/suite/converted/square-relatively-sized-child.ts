// Converted from test/suite/corpus/square-relatively-sized-child.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, eastern, external, inline, pct, pt, rect, space, square } from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  return doc(
    inline(
      square(
        { fill: eastern },
        inline(
          space,
          rect({ width: pt(10), height: pt(5), fill: conifer }),
          space,
          rect({ width: pct(40), height: pt(5), stroke: conifer }),
          space,
        ),
      ),
    ),
  )
}
