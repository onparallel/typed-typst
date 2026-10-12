// Converted from test/suite/corpus/issue-622-hide-meta-outline.typ by scripts/convert-suite.ts — do not edit.
import {
  block,
  blocks,
  doc,
  grid,
  heading,
  hide,
  inline,
  m,
  outline,
  pt,
  set,
  space,
  text,
} from '../../../src/index.ts'

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
              blocks(heading({ depth: 1 }, inline('A'))),
              blocks(heading({ depth: 1 }, inline('B'))),
              block(grid(blocks(heading({ depth: 1 }, inline('C'))), blocks(heading({ depth: 1 }, inline('D'))))),
            ),
          ),
        ),
      ),
    ),
  )
}
