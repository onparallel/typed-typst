// Converted from test/suite/corpus/outline-indent-func.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { data, doc, em, heading, inline, m, outline, pt, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(heading, { numbering: '1.a.' }), show(heading, null)),
    inline(outline({ indent: (n) => data([pt(0), em(1), em(2.5), em(3)]).at(n) })),
    m.lines(
      m.heading(1, 'A'),
      m.heading(2, 'B'),
      m.heading(3, 'C'),
      m.heading(4, 'Title breaks'),
      set(heading, { numbering: null }),
      m.heading(2, 'E'),
      m.heading(1, 'F'),
    ),
  )
}
