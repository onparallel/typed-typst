// Converted from test/suite/corpus/content-field-materialized-heading.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m, pt, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '(I)' }),
      show(heading, set(text, { size: pt(11), weight: 'regular' })),
      show(heading, (it, ctx) => it.numbering),
      heading({ depth: 1 }, inline('Heading')),
    ),
  )
}
