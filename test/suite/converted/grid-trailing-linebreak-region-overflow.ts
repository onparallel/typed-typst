// Converted from test/suite/corpus/grid-trailing-linebreak-region-overflow.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, cm, doc, grid, inline, linebreak, m, page, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: cm(2) }),
      inline(grid(blocks(inline`Hello ${linebreak()} Hello ${linebreak()} Hello ${linebreak()}`, 'World'))),
    ),
  )
}
