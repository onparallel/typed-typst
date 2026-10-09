// Converted from test/suite/corpus/page-margin-individual.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  bottom,
  contentBlock,
  doc,
  inline,
  left,
  m,
  page,
  pt,
  right,
  set,
  space,
  top,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(40) }),
      inline(
        contentBlock(inline(set(page, { margin: { left: pt(0) } }), space, align(left, inline`Left`))),
        space,
        contentBlock(inline(set(page, { margin: { right: pt(0) } }), space, align(right, inline`Right`))),
        space,
        contentBlock(inline(set(page, { margin: { top: pt(0) } }), space, align(top, inline`Top`))),
        space,
        contentBlock(inline(set(page, { margin: { bottom: pt(0) } }), space, align(bottom, inline`Bottom`))),
      ),
    ),
    inline(contentBlock(inline`${set(page, { margin: { rest: pt(0), left: pt(20) } })} Overridden`)),
  )
}
