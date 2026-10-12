// Converted from test/suite/corpus/outline-indent-auto-mixed-prefix.typ by scripts/convert-suite.ts — do not edit.
import { blocks, contentBlock, doc, heading, inline, m, outline, set, show, strong, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show(heading, null), show(where(outline.entry, { level: 1 }), strong)),
    inline(outline()),
    m.lines(
      set(heading, { numbering: 'I.i.' }),
      heading({ depth: 1 }, inline('A')),
      heading({ depth: 2 }, inline('B')),
      heading({ depth: 3 }, inline('Title that breaks')),
      heading({ depth: 1 }, inline('C')),
      heading({ depth: 2 }, inline('D')),
      heading({ depth: 1 }, inline('E')),
      inline(
        contentBlock(
          blocks(
            m.lines(
              set(heading, { numbering: null }),
              heading({ depth: 1 }, inline('F')),
              heading({ depth: 2 }, inline('Numberless title that breaks')),
              heading({ depth: 3 }, inline('G')),
            ),
          ),
        ),
      ),
      heading({ depth: 1 }, inline('H')),
    ),
  )
}
