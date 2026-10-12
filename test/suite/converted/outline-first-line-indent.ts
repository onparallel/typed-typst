// Converted from test/suite/corpus/outline-first-line-indent.typ by scripts/convert-suite.ts — do not edit.
import { doc, em, heading, inline, m, outline, par, set, show, strong, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(par, { firstLineIndent: em(1.5) }),
      set(heading, { numbering: '1.1.a.' }),
      show(where(outline.entry, { level: 1 }), strong),
    ),
    inline(outline()),
    m.lines(
      show(heading, null),
      heading({ depth: 1 }, inline('Introduction')),
      heading({ depth: 1 }, inline('Background')),
      heading({ depth: 2 }, inline('History')),
      heading({ depth: 2 }, inline('State of the Art')),
      heading({ depth: 1 }, inline('Analysis')),
      heading({ depth: 2 }, inline('Setup')),
    ),
  )
}
