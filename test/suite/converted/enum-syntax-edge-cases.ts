// Converted from test/suite/corpus/enum-syntax-edge-cases.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(m.enum(m.item([])), inline`Empty ${linebreak()} +Nope ${linebreak()} a + 0.`))
}
