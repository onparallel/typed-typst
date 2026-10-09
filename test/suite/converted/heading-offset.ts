// Converted from test/suite/corpus/heading-offset.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, heading, inline, m, set, show, space, text, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '1.1' }),
      show(where(heading, { level: 2 }), set(text, { fill: blue })),
      m.heading(1, 'Level 1'),
    ),
    inline(heading({ depth: 1 }, inline`We're twins`), space, heading({ level: 1 }, inline`We're twins`)),
    m.heading(2, 'Real level 2'),
    m.lines(set(heading, { offset: 1 }), m.heading(1, 'Fake level 2'), m.heading(2, 'Fake level 3')),
  )
}
