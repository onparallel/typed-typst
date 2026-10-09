// Converted from test/suite/corpus/show-where-resolving-hyphenate.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  auto,
  blocks,
  contentBlock,
  doc,
  inline,
  m,
  set,
  show,
  space,
  text,
  underline,
  where,
} from '../../../src/index.ts'

export default () => {
  return doc(
    set(text, { hyphenate: auto }),
    inline(
      contentBlock(blocks(m.lines(show(where(text, { hyphenate: auto }), underline), 'Auto'))),
      space,
      contentBlock(blocks(m.lines(show(where(text, { hyphenate: true }), underline), 'True'))),
      space,
      contentBlock(blocks(m.lines(show(where(text, { hyphenate: false }), underline), 'False'))),
    ),
  )
}
