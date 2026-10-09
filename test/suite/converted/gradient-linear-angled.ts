// Converted from test/suite/corpus/gradient-linear-angled.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  blue,
  box,
  deg,
  doc,
  gradient,
  grid,
  inline,
  m,
  page,
  pct,
  pt,
  range,
  red,
  set,
  spread,
  times,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(90) }),
      inline(
        grid(
          { gutter: pt(3), columns: 4 },
          spread(
            range({ step: 15 }, 0, 360).map((i) =>
              box({
                height: pt(15),
                width: pt(15),
                fill: gradient.linear({ angle: times(i, deg(1)) }, [red, pct(0)], [blue, pct(100)]),
              }),
            ),
          ),
        ),
      ),
    ),
  )
}
