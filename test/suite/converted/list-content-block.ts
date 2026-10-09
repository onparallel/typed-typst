// Converted from test/suite/corpus/list-content-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { contentBlock, doc, inline, m, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.list(
      m.item(
        m.lines(
          'Level 1',
          m.list(m.item(['Level', space, contentBlock(inline`${space}2 through content block${space}`)])),
        ),
      ),
    ),
  )
}
