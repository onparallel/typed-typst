// Converted from test/suite/corpus/disable-tags-partially-hidden-list.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, doc, hide, inline, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      m.heading(1, 'Tail hidden'),
      m.list(m.item(['a'])),
      inline(hide(blocks(m.list(m.item(m.lines('b', m.list(m.item(['c'])))))))),
    ),
    m.lines(
      m.heading(1, 'Head hidden'),
      inline(hide(blocks(m.list(m.item(['a']))))),
      m.list(m.item(m.lines('b', m.list(m.item(['c']))))),
    ),
  )
}
