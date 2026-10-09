// Converted from test/suite/corpus/list-expand-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, block, blocks, center, doc, em, inline, m, rect, red } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      block(
        blocks(
          m.list(
            m.item([align(center, inline`a`)]),
            m.item(['bbbb']),
            m.item([rect({ width: em(4), height: em(1), fill: red })]),
          ),
        ),
      ),
    ),
    inline(
      block(
        { width: em(6) },
        blocks(
          m.list(
            m.item([align(center, inline`a`)]),
            m.item(['bbbb']),
            m.item([rect({ width: em(4), height: em(1), fill: red })]),
          ),
        ),
      ),
    ),
    m.list(
      m.item([align(center, inline`a`)]),
      m.item(['bbbb']),
      m.item([rect({ width: em(4), height: em(1), fill: red })]),
    ),
  )
}
