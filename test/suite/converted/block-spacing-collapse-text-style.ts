// Converted from test/suite/corpus/block-spacing-collapse-text-style.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, em, grid, inline, pt, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 2 },
        inline(
          space,
          text({ size: pt(12) }, block({ below: em(1) }, inline`A`)),
          space,
          text({ size: pt(8) }, block({ above: em(1) }, inline`B`)),
          space,
        ),
        inline(
          space,
          text({ size: pt(12) }, block({ below: em(1) }, inline`A`)),
          space,
          text({ size: pt(8) }, block({ above: em(1.25) }, inline`B`)),
          space,
        ),
      ),
    ),
  )
}
