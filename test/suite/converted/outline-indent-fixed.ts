// Converted from test/suite/corpus/outline-indent-fixed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, heading, inline, m, outline, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(heading, { numbering: '1.a.' }), show(heading, null)),
    inline(outline({ indent: em(1) })),
    m.lines(
      m.heading(1, 'A'),
      m.heading(2, 'B'),
      m.heading(3, 'C'),
      m.heading(4, 'Title that breaks'),
      set(heading, { numbering: null }),
      m.heading(2, 'E'),
      m.heading(1, 'F'),
    ),
  )
}
