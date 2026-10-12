// Converted from test/suite/corpus/outline-spacing.typ by scripts/convert-suite.ts — do not edit.
import { block, doc, em, heading, inline, m, outline, set, show, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '1.a.' }),
      set(outline.entry, { fill: null }),
      show(where(outline.entry, { level: 1 }), set(block, { above: em(1.2) })),
    ),
    inline(outline()),
    m.lines(
      show(heading, null),
      heading({ depth: 1 }, inline('A')),
      heading({ depth: 2 }, inline('B')),
      heading({ depth: 2 }, inline('C')),
      heading({ depth: 1 }, inline('D')),
      heading({ depth: 2 }, inline('E')),
    ),
  )
}
