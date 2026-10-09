// Converted from test/suite/corpus/grid-funcs-gutter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { assume, blue, calc, data, doc, em, grid, inline, left, pt, red, right } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        {
          columns: [em(3), em(3)],
          fill: (x, y) => data([red, blue]).at(assume<'int'>(calc.rem(x, 2))),
          align: (x_2, y_2) => data([left, right]).at(assume<'int'>(calc.rem(y_2, 2))),
        },
        inline`A`,
        inline`B`,
        inline`C`,
        inline`D`,
        inline`E`,
        inline`F`,
        inline`G`,
        inline`H`,
      ),
    ),
    inline(
      grid(
        {
          columns: [em(3), em(3)],
          fill: (x_3, y_3) => data([red, blue]).at(assume<'int'>(calc.rem(x_3, 2))),
          align: (x_4, y_4) => data([left, right]).at(assume<'int'>(calc.rem(y_4, 2))),
          rowGutter: pt(5),
        },
        inline`A`,
        inline`B`,
        inline`C`,
        inline`D`,
        inline`E`,
        inline`F`,
        inline`G`,
        inline`H`,
      ),
    ),
    inline(
      grid(
        {
          columns: [em(3), em(3)],
          fill: (x_5, y_5) => data([red, blue]).at(assume<'int'>(calc.rem(x_5, 2))),
          align: (x_6, y_6) => data([left, right]).at(assume<'int'>(calc.rem(y_6, 2))),
          columnGutter: pt(5),
        },
        inline`A`,
        inline`B`,
        inline`C`,
        inline`D`,
        inline`E`,
        inline`F`,
        inline`G`,
        inline`H`,
      ),
    ),
    inline(
      grid(
        {
          columns: [em(3), em(3)],
          fill: (x_7, y_7) => data([red, blue]).at(assume<'int'>(calc.rem(x_7, 2))),
          align: (x_8, y_8) => data([left, right]).at(assume<'int'>(calc.rem(y_8, 2))),
          gutter: pt(5),
        },
        inline`A`,
        inline`B`,
        inline`C`,
        inline`D`,
        inline`E`,
        inline`F`,
        inline`G`,
        inline`H`,
      ),
    ),
  )
}
