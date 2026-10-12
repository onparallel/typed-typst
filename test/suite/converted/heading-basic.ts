// Converted from test/suite/corpus/heading-basic.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      heading({ depth: 1 }, inline('Level 1')),
      heading({ depth: 2 }, inline('Level 2')),
      heading({ depth: 3 }, inline('Level 3')),
    ),
    heading({ depth: 11 }, inline('Level 11')),
  )
}
