// Converted from test/suite/corpus/hide-list.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, doc, hide, inline, m } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`Hidden: ${hide(blocks(m.list(m.item(['1']), m.item(m.lines('2', m.enum(m.numbered(1, ['A']), m.numbered(2, ['B'])))), m.item(['3']))))}`,
    m.list(m.item(['1']), m.item(m.lines('2', m.enum(m.numbered(1, ['A']), m.numbered(2, ['B'])))), m.item(['3'])),
  )
}
