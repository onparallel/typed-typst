// Converted from test/suite/corpus/outline-indent-fixed.typ by scripts/convert-suite.ts — do not edit.
import { doc, em, heading, inline, m, outline, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(heading, { numbering: '1.a.' }), show(heading, null)),
    inline(outline({ indent: em(1) })),
    m.lines(
      heading({ depth: 1 }, inline('A')),
      heading({ depth: 2 }, inline('B')),
      heading({ depth: 3 }, inline('C')),
      heading({ depth: 4 }, inline('Title that breaks')),
      set(heading, { numbering: null }),
      heading({ depth: 2 }, inline('E')),
      heading({ depth: 1 }, inline('F')),
    ),
  )
}
