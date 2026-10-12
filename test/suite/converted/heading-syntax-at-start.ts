// Converted from test/suite/corpus/heading-syntax-at-start.typ by scripts/convert-suite.ts — do not edit.
import { blocks, box, contentBlock, doc, heading, inline, m, space, symbol } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      heading({ depth: 1 }, inline('Level 1')),
      inline(
        contentBlock(blocks(heading({ depth: 2 }, inline('Level 2')))),
        space,
        box(blocks(heading({ depth: 3 }, inline('Level 3')))),
      ),
    ),
    'No = heading',
    inline`${symbol('=')} No heading`,
  )
}
