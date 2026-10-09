// Converted from test/suite/corpus/square-height-limited-stack.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, external, inline, ltr, m, page, pt, set, square, stack } from '../../../src/index.ts'

export default () => {
  const forest = external('forest')
  const conifer = external('conifer')
  return doc(
    m.lines(
      set(page, { width: pt(20), height: pt(10), margin: pt(0) }),
      inline(stack({ dir: ltr }, square({ fill: forest }), square({ fill: conifer }))),
    ),
  )
}
