// Converted from test/suite/corpus/outline-indent-auto-no-prefix.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, inline, m, outline, show } from '../../../src/index.ts'

export default () => {
  return doc(
    show(heading, null),
    inline(outline()),
    m.lines(
      m.heading(1, 'A'),
      m.heading(2, 'B'),
      m.heading(3, 'Title that breaks across lines'),
      m.heading(1, 'C'),
      m.heading(2, 'D'),
      m.heading(3, 'E'),
    ),
  )
}
