// Converted from test/suite/corpus/heading-syntax-at-start.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, box, contentBlock, doc, inline, m, space, symbol } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      m.heading(1, 'Level 1'),
      inline(contentBlock(blocks(m.heading(2, 'Level 2'))), space, box(blocks(m.heading(3, 'Level 3')))),
    ),
    'No = heading',
    inline`${symbol('=')} No heading`,
  )
}
