// Converted from test/suite/corpus/int-display.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { data, doc, inline, linebreak, minus, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      data(12),
      space,
      linebreak(),
      space,
      data(1234567890),
      space,
      linebreak(),
      space,
      data(123456789),
      space,
      linebreak(),
      space,
      data(0),
      space,
      linebreak(),
      space,
      data(-0),
      space,
      linebreak(),
      space,
      data(-1),
      space,
      linebreak(),
      space,
      data(-9876543210),
      space,
      linebreak(),
      space,
      data(-987654321),
      space,
      linebreak(),
      space,
      minus(4, 8),
    ),
  )
}
