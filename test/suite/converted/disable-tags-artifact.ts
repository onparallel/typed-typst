// Converted from test/suite/corpus/disable-tags-artifact.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, pdf, space, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      m.heading(1, 'Heading 1'),
      inline(pdf.artifact(inline(space, table({ columns: 2 }, inline`a`, inline`b`, inline`c`, inline`d`), space))),
    ),
    m.heading(1, 'Heading 2'),
  )
}
