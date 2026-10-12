// Converted from test/suite/corpus/heading-syntax-edge-cases.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(heading, { numbering: '1.' }), heading({ depth: 1 }, inline()), 'Not in heading =Nope'))
}
