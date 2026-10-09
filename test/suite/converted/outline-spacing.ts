// Converted from test/suite/corpus/outline-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, em, heading, inline, m, outline, set, show, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '1.a.' }),
      set(outline.entry, { fill: null }),
      show(where(outline.entry, { level: 1 }), set(block, { above: em(1.2) })),
    ),
    inline(outline()),
    m.lines(
      show(heading, null),
      m.heading(1, 'A'),
      m.heading(2, 'B'),
      m.heading(2, 'C'),
      m.heading(1, 'D'),
      m.heading(2, 'E'),
    ),
  )
}
