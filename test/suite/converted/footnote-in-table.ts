// Converted from test/suite/corpus/footnote-in-table.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  doc,
  footnote,
  image,
  inline,
  m,
  numbering,
  page,
  path,
  pt,
  range,
  set,
  spread,
  table,
  upper,
} from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: pt(100) }),
    m.lines(
      m.heading(1, 'Tables'),
      inline(
        table(
          { columns: 2 },
          inline`Hello footnote ${footnote(inline`This is a footnote.`)}`,
          inline`This is more text`,
          inline`This cell ${footnote(inline`This footnote is not on the same page`)} breaks over multiple pages.`,
          image(path('/assets/images/tiger.jpg')),
        ),
      ),
    ),
    inline(
      table(
        { columns: 3 },
        spread(
          range(1, 10)
            .map(numbering.with('a'))
            .map((v_2) => add(upper(v_2), footnote(v_2))),
        ),
      ),
    ),
  )
}
