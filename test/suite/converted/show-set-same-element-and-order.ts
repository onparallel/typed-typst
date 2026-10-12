// Converted from test/suite/corpus/show-set-same-element-and-order.typ by scripts/convert-suite.ts — do not edit.
import { blue, doc, green, heading, inline, m, red, set, show, text, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(heading, set(text, { fill: red })),
      heading({ depth: 1 }, inline('Level 1')),
      heading({ depth: 2 }, inline('Level 2')),
    ),
    m.lines(
      show(where(heading, { level: 1 }), set(text, { fill: blue })),
      show(where(heading, { level: 1 }), set(text, { fill: green })),
      show(where(heading, { level: 1 }), set(heading, { numbering: '(I)' })),
      heading({ depth: 1 }, inline('Level 1')),
      heading({ depth: 2 }, inline('Level 2')),
    ),
  )
}
