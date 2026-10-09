// Converted from test/suite/corpus/issue-5719-terms-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.terms(
      m.term(['Term A'], ['1']),
      m.term(['Term B'], [], m.terms(m.term(['Term C'], ['2']), m.term(['Term D'], ['3']))),
    ),
  )
}
