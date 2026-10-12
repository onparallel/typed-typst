// Converted from test/suite/corpus/show-selector-or-elements-with-set.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      unsafeRaw.markup`#show heading.where(level: 1).or(heading.where(level: 2)): set text(red)`,
      heading({ depth: 1 }, inline('L1')),
      heading({ depth: 2 }, inline('L2')),
      heading({ depth: 3 }, inline('L3')),
      heading({ depth: 4 }, inline('L4')),
    ),
  )
}
