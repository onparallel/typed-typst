// Converted from test/suite/corpus/disable-tags-partially-hidden-list.typ by scripts/convert-suite.ts — do not edit.
import { blocks, doc, heading, hide, inline, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      heading({ depth: 1 }, inline('Tail hidden')),
      m.list(m.item(['a'])),
      inline(hide(blocks(m.list(m.item(m.lines('b', m.list(m.item(['c'])))))))),
    ),
    m.lines(
      heading({ depth: 1 }, inline('Head hidden')),
      inline(hide(blocks(m.list(m.item(['a']))))),
      m.list(m.item(m.lines('b', m.list(m.item(['c']))))),
    ),
  )
}
