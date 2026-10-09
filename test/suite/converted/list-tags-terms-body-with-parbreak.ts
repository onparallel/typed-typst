// Converted from test/suite/corpus/list-tags-terms-body-with-parbreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, parbreak, space } from '../../../src/index.ts'

export default () => {
  return doc(m.terms(m.term(['A'], ['1', space, parbreak(), space, '232']), m.term(['B'], ['2'])))
}
