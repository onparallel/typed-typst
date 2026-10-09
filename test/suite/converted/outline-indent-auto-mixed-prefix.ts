// Converted from test/suite/corpus/outline-indent-auto-mixed-prefix.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, contentBlock, doc, heading, inline, m, outline, set, show, strong, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show(heading, null), show(where(outline.entry, { level: 1 }), strong)),
    inline(outline()),
    m.lines(
      set(heading, { numbering: 'I.i.' }),
      m.heading(1, 'A'),
      m.heading(2, 'B'),
      m.heading(3, 'Title that breaks'),
      m.heading(1, 'C'),
      m.heading(2, 'D'),
      m.heading(1, 'E'),
      inline(
        contentBlock(
          blocks(
            m.lines(
              set(heading, { numbering: null }),
              m.heading(1, 'F'),
              m.heading(2, 'Numberless title that breaks'),
              m.heading(3, 'G'),
            ),
          ),
        ),
      ),
      m.heading(1, 'H'),
    ),
  )
}
