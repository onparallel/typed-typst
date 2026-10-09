// Converted from test/suite/corpus/show-selector-or-elements-with-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      unsafeRaw.markup`#show heading.where(level: 1).or(heading.where(level: 2)): set text(red)`,
      m.heading(1, 'L1'),
      m.heading(2, 'L2'),
      m.heading(3, 'L3'),
      m.heading(4, 'L4'),
    ),
  )
}
