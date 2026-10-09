// Converted from test/suite/corpus/disable-tags-hide.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, doc, hide, inline, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.heading(1, 'Hidden'),
    inline(hide(blocks(m.list(m.item(['a']), m.item(m.lines('b', m.list(m.item(['c'])))))))),
  )
}
