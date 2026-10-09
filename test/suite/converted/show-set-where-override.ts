// Converted from test/suite/corpus/show-set-where-override.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, green, heading, m, red, set, show, text, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(heading, set(text, { fill: green })),
      show(where(heading, { level: 1 }), set(text, { fill: red })),
      show(where(heading, { level: 2 }), set(text, { fill: blue })),
      m.heading(1, 'Red'),
      m.heading(2, 'Blue'),
      m.heading(3, 'Green'),
    ),
  )
}
