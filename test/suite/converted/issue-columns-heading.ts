// Converted from test/suite/corpus/issue-columns-heading.typ by scripts/convert-suite.ts — do not edit.
import { blocks, columns, doc, heading, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: pt(70) }),
    inline`Hallo ${columns(2, blocks(m.lines(heading({ depth: 1 }, inline('A')), 'Text', heading({ depth: 1 }, inline('B')), 'Text')))}`,
  )
}
