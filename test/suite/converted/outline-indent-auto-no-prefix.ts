// Converted from test/suite/corpus/outline-indent-auto-no-prefix.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m, outline, show } from '../../../src/index.ts'

export default () => {
  return doc(
    show(heading, null),
    inline(outline()),
    m.lines(
      heading({ depth: 1 }, inline('A')),
      heading({ depth: 2 }, inline('B')),
      heading({ depth: 3 }, inline('Title that breaks across lines')),
      heading({ depth: 1 }, inline('C')),
      heading({ depth: 2 }, inline('D')),
      heading({ depth: 3 }, inline('E')),
    ),
  )
}
