// Converted from test/suite/corpus/show-in-show.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, heading, inline, m, red, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    show(heading, (it, ctx) => codeBlock([set(text, { fill: red }), show('ding', inline`🛎`)], it.body)),
    m.heading(1, 'Heading'),
  )
}
