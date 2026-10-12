// Converted from test/suite/corpus/show-set-same-element-matched-field.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m, set, show, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '(I)' }),
      show(where(heading, { numbering: '(I)' }), set(heading, { numbering: '1.' })),
      heading({ depth: 1 }, inline('Heading')),
    ),
  )
}
