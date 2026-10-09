// Converted from test/suite/corpus/square-contents-overflow.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, external, inline, m, page, pt, set, space, square } from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  return doc(
    m.lines(
      set(page, { width: pt(75), height: pt(100) }),
      inline(square({ fill: conifer }, inline`${space}But, soft! what light through yonder window breaks?${space}`)),
    ),
  )
}
