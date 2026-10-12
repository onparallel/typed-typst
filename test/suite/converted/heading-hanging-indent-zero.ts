// Converted from test/suite/corpus/heading-hanging-indent-zero.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '1.1.a.', hangingIndent: pt(0) }),
      heading({ depth: 1 }, inline('State of the Art')),
    ),
  )
}
