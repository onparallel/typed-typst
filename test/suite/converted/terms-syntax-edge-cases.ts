// Converted from test/suite/corpus/terms-syntax-edge-cases.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(m.terms(m.term(['Term'], [])), 'Not in list /Nope'))
}
