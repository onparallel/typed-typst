// Converted from test/suite/corpus/math-equation-tag-affects-row-height.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, em, inline, ltr, m, set, silver, stack, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(stack, { dir: ltr, spacing: em(0.5) }),
      inline(
        stack(
          box({ fill: silver }, unsafeRaw.math.block`- -`),
          box({ fill: silver }, unsafeRaw.math.block`#metadata(none) - -`),
        ),
      ),
    ),
    inline(
      stack(
        box({ fill: silver }, unsafeRaw.math.block`a \\ - -`),
        box({ fill: silver }, unsafeRaw.math.block`a \\ #metadata(none) - -`),
        box({ fill: silver }, unsafeRaw.math.block`- - \\ a`),
        box({ fill: silver }, unsafeRaw.math.block`#metadata(none) - - \\ a`),
      ),
    ),
  )
}
