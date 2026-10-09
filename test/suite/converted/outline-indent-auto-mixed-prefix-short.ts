// Converted from test/suite/corpus/outline-indent-auto-mixed-prefix-short.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, inline, m, outline, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    show(heading, null),
    inline(outline()),
    m.lines(
      set(heading, { numbering: 'I.i.' }),
      m.heading(1, 'A'),
      set(heading, { numbering: null }),
      m.heading(1, 'B'),
    ),
  )
}
