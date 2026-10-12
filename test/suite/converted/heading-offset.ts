// Converted from test/suite/corpus/heading-offset.typ by scripts/convert-suite.ts — do not edit.
import { blue, doc, heading, inline, m, set, show, space, text, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '1.1' }),
      show(where(heading, { level: 2 }), set(text, { fill: blue })),
      heading({ depth: 1 }, inline('Level 1')),
    ),
    inline(heading({ depth: 1 }, inline`We're twins`), space, heading({ level: 1 }, inline`We're twins`)),
    heading({ depth: 2 }, inline('Real level 2')),
    m.lines(
      set(heading, { offset: 1 }),
      heading({ depth: 1 }, inline('Fake level 2')),
      heading({ depth: 2 }, inline('Fake level 3')),
    ),
  )
}
