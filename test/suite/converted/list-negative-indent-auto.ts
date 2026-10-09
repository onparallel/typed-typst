// Converted from test/suite/corpus/list-negative-indent-auto.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, blocks, contentBlock, doc, inline, list, lorem, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      inline(contentBlock(blocks(m.lines(set(list, { indent: pt(-50) }), m.list(m.item([lorem(20)])))))),
    ),
  )
}
