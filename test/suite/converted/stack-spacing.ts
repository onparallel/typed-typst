// Converted from test/suite/corpus/stack-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, eastern, inline, let_, ltr, m, page, pct, pt, rtl, set, square, stack } from '../../../src/index.ts'

export default () => {
  const [xDecl, x] = let_('x', square({ size: pt(10), fill: eastern }))
  return doc(
    set(page, { width: pt(50), margin: pt(0) }),
    m.lines(
      xDecl,
      inline(
        stack(
          { spacing: pt(5) },
          stack({ dir: rtl, spacing: pt(5) }, x, x, x),
          stack({ dir: ltr }, x, pct(20), x, pct(20), x),
          stack({ dir: ltr, spacing: pt(5) }, x, x, pt(7), pt(3), x),
        ),
      ),
    ),
  )
}
