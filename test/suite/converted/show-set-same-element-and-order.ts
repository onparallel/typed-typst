// Converted from test/suite/corpus/show-set-same-element-and-order.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, green, heading, m, red, set, show, text, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show(heading, set(text, { fill: red })), m.heading(1, 'Level 1'), m.heading(2, 'Level 2')),
    m.lines(
      show(where(heading, { level: 1 }), set(text, { fill: blue })),
      show(where(heading, { level: 1 }), set(text, { fill: green })),
      show(where(heading, { level: 1 }), set(heading, { numbering: '(I)' })),
      m.heading(1, 'Level 1'),
      m.heading(2, 'Level 2'),
    ),
  )
}
