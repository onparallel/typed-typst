// Converted from test/suite/corpus/grid-breaking-expand-vertically.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  blocks,
  bottom,
  cm,
  doc,
  grid,
  inline,
  linebreak,
  m,
  page,
  pt,
  set,
  space,
  top,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: cm(2.25) }),
      inline(
        grid(
          { columns: 2, gutter: pt(10) },
          align(bottom, inline`A`),
          inline`${space}Top ${align(bottom, blocks(inline`Bottom ${linebreak()} Bottom`, 'Top'))}${space}`,
          align(top, inline`B`),
        ),
      ),
    ),
  )
}
