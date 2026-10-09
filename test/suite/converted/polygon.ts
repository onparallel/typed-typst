// Converted from test/suite/corpus/polygon.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, em, inline, m, page, pct, polygon, pt, set, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(50) }), set(polygon, { stroke: pt(0.75), fill: blue })),
    inline(
      polygon(),
      space,
      polygon([em(0), pt(0)]),
      space,
      polygon([pt(0), pt(0)], [pt(10), pt(0)]),
      space,
      polygon.regular({ size: pt(0), vertices: 9 }),
    ),
    inline(
      polygon([pt(5), pt(0)], [pt(0), pt(10)], [pt(10), pt(10)]),
      space,
      polygon([pt(0), pt(0)], [pt(5), pt(5)], [pt(10), pt(0)], [pt(15), pt(5)], [pt(5), pt(10)]),
      space,
      polygon({ stroke: null }, [pt(5), pt(0)], [pt(0), pt(10)], [pt(10), pt(10)]),
      space,
      polygon({ stroke: pt(3), fill: null }, [pt(5), pt(0)], [pt(0), pt(10)], [pt(10), pt(10)]),
    ),
    inline(polygon([pt(0), pt(0)], [pct(100), pt(5)], [pct(50), pt(10)])),
    inline(polygon([pt(0), pt(5)], [pt(5), pt(0)], [pt(0), pt(10)], [pt(5), pt(15)])),
    inline(
      polygon([pt(0), pt(10)], [pt(30), pt(20)], [pt(0), pt(30)], [pt(20), pt(0)], [pt(20), pt(35)]),
      space,
      polygon(
        { fillRule: 'non-zero' },
        [pt(0), pt(10)],
        [pt(30), pt(20)],
        [pt(0), pt(30)],
        [pt(20), pt(0)],
        [pt(20), pt(35)],
      ),
      space,
      polygon(
        { fillRule: 'even-odd' },
        [pt(0), pt(10)],
        [pt(30), pt(20)],
        [pt(0), pt(30)],
        [pt(20), pt(0)],
        [pt(20), pt(35)],
      ),
    ),
    inline(unsafeRaw.code<any>`for k in range(3, 9) {polygon.regular(size: 30pt, vertices: k,)}`),
  )
}
