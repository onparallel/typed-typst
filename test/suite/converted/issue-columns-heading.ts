// Converted from test/suite/corpus/issue-columns-heading.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, columns, doc, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: pt(70) }),
    inline`Hallo ${columns(2, blocks(m.lines(m.heading(1, 'A'), 'Text', m.heading(1, 'B'), 'Text')))}`,
  )
}
