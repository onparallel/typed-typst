// Converted from test/suite/corpus/grid-tags-cell-breaking.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, cm, doc, grid, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: cm(5), height: cm(3) }),
      inline(
        grid(
          { columns: 2, rowGutter: pt(8) },
          blocks('Lorem ipsum dolor sit amet.', 'Aenean commodo ligula eget dolor. Aenean massa. Penatibus et magnis.'),
          inline`Text that is rather short`,
          inline`Fireflies`,
          inline`Critical`,
          inline`Decorum`,
          inline`Rampage`,
        ),
      ),
    ),
  )
}
