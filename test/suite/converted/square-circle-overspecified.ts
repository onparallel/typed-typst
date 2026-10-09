// Converted from test/suite/corpus/square-circle-overspecified.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { circle, doc, inline, ltr, pct, pt, square, stack } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      stack(
        { dir: ltr, spacing: pt(2) },
        square({ width: pt(20), height: pt(40) }),
        circle({ width: pct(20), height: pt(40) }),
      ),
    ),
  )
}
