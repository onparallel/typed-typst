// Converted from test/suite/corpus/show-set-where-override.typ by scripts/convert-suite.ts — do not edit.
import { blue, doc, green, heading, inline, m, red, set, show, text, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(heading, set(text, { fill: green })),
      show(where(heading, { level: 1 }), set(text, { fill: red })),
      show(where(heading, { level: 2 }), set(text, { fill: blue })),
      heading({ depth: 1 }, inline('Red')),
      heading({ depth: 2 }, inline('Blue')),
      heading({ depth: 3 }, inline('Green')),
    ),
  )
}
