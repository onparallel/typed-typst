// Converted from test/suite/corpus/page-margin-uniform.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  blocks,
  bottom,
  contentBlock,
  doc,
  inline,
  left,
  m,
  page,
  place,
  pt,
  right,
  set,
  space,
  top,
} from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      contentBlock(
        blocks(
          m.lines(
            set(page, { height: pt(20), margin: pt(5) }),
            inline(place(add(top, left), inline`TL`), space, place(add(bottom, right), inline`BR`)),
          ),
        ),
      ),
    ),
  )
}
