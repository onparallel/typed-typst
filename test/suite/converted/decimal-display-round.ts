// Converted from test/suite/corpus/decimal-display-round.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { calc, decimal, doc, inline, linebreak, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      calc.round({ digits: 4 }, decimal('-3.9191919191919191919191919195')),
      space,
      linebreak(),
      space,
      calc.round({ digits: 4 }, decimal('5.0000000000')),
    ),
  )
}
