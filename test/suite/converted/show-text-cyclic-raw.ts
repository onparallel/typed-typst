// Converted from test/suite/corpus/show-text-cyclic-raw.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, raw, show } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show('rax', raw('rax')), 'The register rax.'))
}
