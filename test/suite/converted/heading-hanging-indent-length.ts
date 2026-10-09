// Converted from test/suite/corpus/heading-hanging-indent-length.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, heading, m, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '1.1.a.', hangingIndent: em(2) }),
      m.heading(1, 'State of the Art In Multi-Line'),
    ),
  )
}
