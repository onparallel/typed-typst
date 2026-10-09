// Converted from test/suite/corpus/outline-indent-zero.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, inline, m, outline, pt, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(heading, { numbering: '1.a.' }), show(heading, null)),
    inline(outline({ indent: pt(0) })),
    m.lines(
      m.heading(1, 'A'),
      m.heading(2, 'B'),
      m.heading(3, 'C'),
      m.heading(4, 'Title that breaks across lines'),
      set(heading, { numbering: null }),
      m.heading(2, 'E'),
      m.heading(1, 'F'),
    ),
  )
}
