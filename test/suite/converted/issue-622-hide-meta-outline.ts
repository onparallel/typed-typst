// Converted from test/suite/corpus/issue-622-hide-meta-outline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, blocks, doc, grid, hide, inline, m, outline, pt, set, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { size: pt(8) }),
      inline(
        outline(),
        space,
        set(text, { size: pt(2) }),
        space,
        hide(
          block(
            grid(
              blocks(m.heading(1, 'A')),
              blocks(m.heading(1, 'B')),
              block(grid(blocks(m.heading(1, 'C')), blocks(m.heading(1, 'D')))),
            ),
          ),
        ),
      ),
    ),
  )
}
