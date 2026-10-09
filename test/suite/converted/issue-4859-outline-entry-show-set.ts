// Converted from test/suite/corpus/issue-4859-outline-entry-show-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, inline, m, outline, set, show, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '1.a.' }),
      show(where(outline.entry, { level: 1 }), set(outline.entry, { fill: null })),
      show(heading, null),
    ),
    inline(outline()),
    m.lines(m.heading(1, 'A'), m.heading(2, 'B')),
  )
}
