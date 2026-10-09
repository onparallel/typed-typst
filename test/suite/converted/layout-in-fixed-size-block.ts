// Converted from test/suite/corpus/layout-in-fixed-size-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, layout, m, page, pt, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(120) }),
      inline(
        block(
          { width: pt(60), height: pt(80) },
          layout(unsafeRaw.code<any>`size => [
  This block has a width of #size.width and height of #size.height
]`),
        ),
      ),
    ),
  )
}
