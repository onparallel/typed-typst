// Converted from test/suite/corpus/outline-indent-func.typ by scripts/convert-suite.ts — do not edit.
import { data, doc, em, heading, inline, m, outline, pt, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(heading, { numbering: '1.a.' }), show(heading, null)),
    inline(outline({ indent: (n) => data([pt(0), em(1), em(2.5), em(3)]).at(n) })),
    m.lines(
      heading({ depth: 1 }, inline('A')),
      heading({ depth: 2 }, inline('B')),
      heading({ depth: 3 }, inline('C')),
      heading({ depth: 4 }, inline('Title breaks')),
      set(heading, { numbering: null }),
      heading({ depth: 2 }, inline('E')),
      heading({ depth: 1 }, inline('F')),
    ),
  )
}
