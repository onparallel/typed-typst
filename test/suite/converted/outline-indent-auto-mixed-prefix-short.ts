// Converted from test/suite/corpus/outline-indent-auto-mixed-prefix-short.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m, outline, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    show(heading, null),
    inline(outline()),
    m.lines(
      set(heading, { numbering: 'I.i.' }),
      heading({ depth: 1 }, inline('A')),
      set(heading, { numbering: null }),
      heading({ depth: 1 }, inline('B')),
    ),
  )
}
