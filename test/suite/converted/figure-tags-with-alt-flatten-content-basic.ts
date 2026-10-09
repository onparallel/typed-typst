// Converted from test/suite/corpus/figure-tags-with-alt-flatten-content-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, doc, figure, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      figure(
        { alt: 'alt text' },
        blocks(inline(unsafeRaw.math`a^2 + b^2 = c^2`), inline(unsafeRaw.math`sum_(i=1)^n(i)`)),
      ),
    ),
  )
}
