// Converted from test/suite/corpus/show-set-same-element-matching-interaction.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, m, red, set, show, text, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(where(heading, { level: 1 }), set(heading, { numbering: '(I)' })),
      show(where(heading, { numbering: '(I)' }), set(text, { fill: red })),
      m.heading(1, 'Heading'),
    ),
  )
}
