// Converted from test/suite/corpus/list-tags-terms-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(m.terms(m.term(['A'], ['1']), m.term(['B'], ['2']), m.term(['C'], ['3'])))
}
