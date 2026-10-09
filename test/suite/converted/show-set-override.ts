// Converted from test/suite/corpus/show-set-override.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, inline, m, red, set, show, strong, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show(strong, set(text, { fill: red })), inline`Hello ${strong(inline`World`)}`),
    m.lines(show(strong, set(text, { fill: blue })), inline`Hello ${strong(inline`World`)}`),
  )
}
