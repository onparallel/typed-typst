// Converted from test/suite/corpus/divider-in-container.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, divider, doc, inline, m, page, pt, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(200) }),
      inline(
        box(
          { width: pt(150), stroke: pt(1), inset: pt(10) },
          inline`${space}Content before ${divider()} Content after${space}`,
        ),
      ),
    ),
  )
}
