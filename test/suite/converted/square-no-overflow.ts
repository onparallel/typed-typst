// Converted from test/suite/corpus/square-no-overflow.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pt, set, space, square } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(40), height: pt(25), margin: pt(5) }),
      inline(square(), space, square(inline`Hello there`)),
    ),
  )
}
