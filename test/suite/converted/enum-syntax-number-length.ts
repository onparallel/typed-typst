// Converted from test/suite/corpus/enum-syntax-number-length.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.enum(
      m.numbered(
        10,
        m.lines('a', m.enum(m.numbered(11, ['b']), m.numbered(12, m.lines('c', m.enum(m.numbered(13, ['d'])))))),
      ),
      m.numbered(14, ['e']),
    ),
  )
}
