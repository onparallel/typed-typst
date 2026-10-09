// Converted from test/suite/corpus/heading-hanging-indent-zero.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, m, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(heading, { numbering: '1.1.a.', hangingIndent: pt(0) }), m.heading(1, 'State of the Art')))
}
