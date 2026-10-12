// Converted from test/suite/corpus/show-recursive-identity.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(heading, (it, ctx) => it),
      heading({ depth: 1 }, inline('Heading')),
    ),
  )
}
