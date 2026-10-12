// Converted from test/suite/corpus/heading-hanging-indent-length.typ by scripts/convert-suite.ts — do not edit.
import { doc, em, heading, inline, m, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '1.1.a.', hangingIndent: em(2) }),
      heading({ depth: 1 }, inline('State of the Art In Multi-Line')),
    ),
  )
}
