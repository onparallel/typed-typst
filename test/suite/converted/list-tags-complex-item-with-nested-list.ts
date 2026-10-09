// Converted from test/suite/corpus/list-tags-complex-item-with-nested-list.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, contentBlock, doc, footnote, inline, m, quote } from '../../../src/index.ts'

export default () => {
  return doc(
    m.list(
      m.item([
        contentBlock(
          blocks(
            m.lines(
              inline`${quote({ block: true }, inline`hi`)} ${footnote(inline`1`)}.`,
              m.list(m.item(['a']), m.item(['b'])),
            ),
          ),
        ),
      ]),
      m.item(['c']),
      m.item(['d']),
    ),
  )
}
