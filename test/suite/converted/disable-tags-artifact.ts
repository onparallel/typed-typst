// Converted from test/suite/corpus/disable-tags-artifact.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m, pdf, space, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      heading({ depth: 1 }, inline('Heading 1')),
      inline(pdf.artifact(inline(space, table({ columns: 2 }, inline`a`, inline`b`, inline`c`, inline`d`), space))),
    ),
    heading({ depth: 1 }, inline('Heading 2')),
  )
}
