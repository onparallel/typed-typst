// Converted from test/suite/corpus/show-selector-replace.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, inline, m, show } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show(heading, inline`1234`), m.heading(1, 'Heading')))
}
