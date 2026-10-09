// Converted from test/suite/corpus/list-tags-terms-indented.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.terms(
      m.term(['A'], ['1']),
      m.term(['B'], m.lines('2', m.terms(m.term(['B1'], ['wow']), m.term(['B2'], ['amazing'])))),
    ),
  )
}
