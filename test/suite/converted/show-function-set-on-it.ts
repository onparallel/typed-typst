// Converted from test/suite/corpus/show-function-set-on-it.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, heading, m, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(heading, (it, ctx) => codeBlock([set(heading, { numbering: '(I)' })], it)),
      m.heading(1, 'Heading'),
    ),
  )
}
