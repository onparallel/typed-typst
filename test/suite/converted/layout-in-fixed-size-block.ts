// Converted from test/suite/corpus/layout-in-fixed-size-block.typ by scripts/convert-suite.ts — do not edit.
import { block, doc, inline, layout, m, page, pt, set, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(120) }),
      inline(
        block(
          { width: pt(60), height: pt(80) },
          layout(
            (
              size,
            ) => inline`${space}This block has a width of ${unsafeRaw.code({ size })<any>`size.width`} and height of
${unsafeRaw.code({ size })<any>`size.height`}${space}`,
          ),
        ),
      ),
    ),
  )
}
