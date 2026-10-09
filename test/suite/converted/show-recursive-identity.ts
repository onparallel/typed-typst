// Converted from test/suite/corpus/show-recursive-identity.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, m, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(heading, (it, ctx) => it),
      m.heading(1, 'Heading'),
    ),
  )
}
