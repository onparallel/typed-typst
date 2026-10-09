// Converted from test/suite/corpus/heading-syntax-edge-cases.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, m, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(heading, { numbering: '1.' }), m.heading(1), 'Not in heading =Nope'))
}
