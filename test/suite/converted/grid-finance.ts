// Converted from test/suite/corpus/grid-finance.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, emph, fr, grid, inline, m, page, pt, set, strong, sym } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: cm(11), height: cm(2.5) }),
      inline(
        grid(
          { columns: 5, columnGutter: [fr(2), fr(1), fr(1)], rowGutter: pt(6) },
          inline(strong(inline`Quarter`)),
          inline`Expenditure`,
          inline`External Revenue`,
          inline`Financial ROI`,
          inline(emph(inline`total`)),
          inline(strong(inline`Q1`)),
          inline`173,472.57 $`,
          inline`472,860.91 $`,
          inline`51,286.84 $`,
          inline(emph(inline`350,675.18 $`)),
          inline(strong(inline`Q2`)),
          inline`93,382.12 $`,
          inline`439,382.85 $`,
          inline`${sym.minus}1,134.30 $`,
          inline(emph(inline`344,866.43 $`)),
          inline(strong(inline`Q3`)),
          inline`96,421.49 $`,
          inline`238,583.54 $`,
          inline`3,497.12 $`,
          inline(emph(inline`145,659.17 $`)),
        ),
      ),
    ),
  )
}
