// Converted from test/suite/corpus/list-tags-terms-label-with-parbreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, parbreak } from '../../../src/index.ts'

export default () => {
  return doc(m.terms(m.term(['A', ' ', parbreak(), ' ', 'A'], ['1']), m.term(['B'], ['2'])))
}
