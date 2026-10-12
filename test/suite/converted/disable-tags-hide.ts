// Converted from test/suite/corpus/disable-tags-hide.typ by scripts/convert-suite.ts — do not edit.
import { blocks, doc, heading, hide, inline, m } from '../../../src/index.ts'

export default () => {
  return doc(
    heading({ depth: 1 }, inline('Hidden')),
    inline(hide(blocks(m.list(m.item(['a']), m.item(m.lines('b', m.list(m.item(['c'])))))))),
  )
}
