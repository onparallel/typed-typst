// Converted from test/suite/corpus/enum-numbering-closure.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  assume,
  blue,
  calc,
  data,
  doc,
  em,
  enum_,
  green,
  inline,
  minus,
  numbering,
  pt,
  red,
  text,
} from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      enum_(
        {
          start: 3,
          spacing: minus(em(0.65), pt(3)),
          tight: false,
          numbering: (n) =>
            text({ fill: data([red, green, blue]).at(assume<'int'>(calc.rem(n, 3))) }, numbering('A', n)),
        },
        inline`Red`,
        inline`Green`,
        inline`Blue`,
        inline`Red`,
      ),
    ),
  )
}
