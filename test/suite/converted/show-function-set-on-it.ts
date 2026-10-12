// Converted from test/suite/corpus/show-function-set-on-it.typ by scripts/convert-suite.ts — do not edit.
import { codeBlock, doc, heading, inline, m, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(heading, (it, ctx) => codeBlock([set(heading, { numbering: '(I)' })], it)),
      heading({ depth: 1 }, inline('Heading')),
    ),
  )
}
