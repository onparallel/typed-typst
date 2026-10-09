// Converted from test/suite/corpus/heading-tags-complex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      m.heading(1, 'Level 1'),
      m.heading(2, 'Level 2'),
      m.heading(3, 'Level 3'),
      m.heading(3, 'Level 3'),
      m.heading(2, 'Level 2'),
      m.heading(3, 'Level 3'),
      m.heading(4, 'Level 4'),
      m.heading(2, 'Level 2'),
      m.heading(3, 'Level 3'),
      m.heading(3, 'Level 3'),
      m.heading(3, 'Level 3'),
      m.heading(1, 'Level 1'),
      m.heading(2, 'Level 2'),
    ),
  )
}
