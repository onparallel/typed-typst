// Converted from test/suite/corpus/image-fit.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, fr, grid, image, inline, m, page, path, pct, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(50), margin: pt(0) }),
      inline(
        grid(
          { columns: [fr(1), fr(1), fr(1)], rows: pct(100), gutter: pt(3) },
          image({ width: pct(100), height: pct(100), fit: 'contain' }, path('/assets/images/tiger.jpg')),
          image({ width: pct(100), height: pct(100), fit: 'cover' }, path('/assets/images/tiger.jpg')),
          image({ width: pct(100), height: pct(100), fit: 'stretch' }, path('/assets/images/monkey.svg')),
        ),
      ),
    ),
  )
}
