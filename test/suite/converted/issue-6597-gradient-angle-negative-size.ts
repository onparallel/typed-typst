// Converted from test/suite/corpus/issue-6597-gradient-angle-negative-size.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  center,
  cm,
  deg,
  doc,
  gradient,
  grid,
  horizon,
  inline,
  m,
  mm,
  rect,
  set,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(rect, { fill: unsafeRaw.code<any>`gradient.linear(angle: 45deg, ..color.map.viridis)` }),
      inline(
        grid(
          { columns: [cm(1), cm(1)], rows: mm(5), gutter: mm(1), align: add(center, horizon) },
          rect({ width: unsafeRaw.code<any>`+1cm`, height: unsafeRaw.code<any>`+5mm` }),
          rect({ width: cm(-1), height: unsafeRaw.code<any>`+5mm` }),
          rect({ width: unsafeRaw.code<any>`+1cm`, height: mm(-5) }),
          rect({ width: cm(-1), height: mm(-5) }),
        ),
      ),
    ),
  )
}
