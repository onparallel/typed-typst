// Converted from test/suite/corpus/outline-first-line-indent.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
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
      m.heading(1, 'Introduction'),
      m.heading(1, 'Background'),
      m.heading(2, 'History'),
      m.heading(2, 'State of the Art'),
      m.heading(1, 'Analysis'),
      m.heading(2, 'Setup'),
    ),
  )
}
