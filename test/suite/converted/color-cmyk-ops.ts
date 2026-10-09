// Converted from test/suite/corpus/color-cmyk-ops.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, cmyk, doc, fr, inline, let_, ltr, m, pct, rect, space, stack, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [cDecl, c] = let_('c', cmyk(pct(50), pct(64), pct(16), pct(17)))
  return doc(
    m.lines(
      cDecl,
      inline(
        stack(
          { dir: ltr, spacing: fr(1) },
          rect({ width: cm(1), fill: cmyk(pct(69), pct(11), pct(69), pct(41)) }),
          rect({ width: cm(1), fill: c }),
          rect({ width: cm(1), fill: c.negate({ space: cmyk }) }),
        ),
      ),
    ),
    inline(
      unsafeRaw.code<any>`for x in range(0, 11) {
  box(square(size: 9pt, fill: c.lighten(x * 10%)))
}`,
      space,
      unsafeRaw.code<any>`for x in range(0, 11) {
  box(square(size: 9pt, fill: c.darken(x * 10%)))
}`,
    ),
  )
}
