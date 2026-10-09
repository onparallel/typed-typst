// Converted from test/suite/corpus/outline-bookmark.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, inline, m, outline, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '(I)', bookmarked: false }),
      set(outline.entry, { fill: null }),
      show(heading, null),
      inline(outline()),
    ),
    m.heading(1, 'A'),
  )
}
