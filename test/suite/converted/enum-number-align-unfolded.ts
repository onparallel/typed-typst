// Converted from test/suite/corpus/enum-number-align-unfolded.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, center, doc, enum_, inline, linebreak, m, set, space, start } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(align, { alignment: center }), set(enum_, { numberAlign: start })),
    m.enum(
      m.numbered(4, ['c']),
      m.numbered(8, ['d']),
      m.numbered(
        16,
        m.lines(
          inline`e${linebreak()} f`,
          m.enum(m.numbered(2, ['f', linebreak(), space, 'g']), m.numbered(32, ['g']), m.numbered(64, ['h'])),
        ),
      ),
    ),
  )
}
