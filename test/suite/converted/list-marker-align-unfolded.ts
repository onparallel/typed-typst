// Converted from test/suite/corpus/list-marker-align-unfolded.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  blocks,
  box,
  contentBlock,
  doc,
  horizon,
  inline,
  list,
  m,
  pt,
  set,
  teal,
  top,
} from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      contentBlock(
        blocks(
          m.lines(set(align, { alignment: top }), set(list, { markerAlign: horizon })),
          m.list(m.item([box({ fill: teal, inset: pt(10) }, inline())])),
        ),
      ),
    ),
    inline(
      contentBlock(
        blocks(
          m.lines(set(align, { alignment: horizon }), m.list(m.item([box({ fill: teal, inset: pt(10) }, inline())]))),
        ),
      ),
    ),
  )
}
