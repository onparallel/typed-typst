// Converted from test/suite/corpus/enum-number-align-unaffected.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, doc, horizon, inline, linebreak, m, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    set(align, { alignment: horizon }),
    m.enum(
      m.item(
        m.lines(
          inline`ABCDEF${linebreak()} GHIJKL${linebreak()} MNOPQR`,
          m.enum(m.item(['INNER', linebreak(), space, 'INNER', linebreak(), space, 'INNER'])),
        ),
      ),
      m.item(['BACK', linebreak(), space, 'HERE']),
    ),
  )
}
