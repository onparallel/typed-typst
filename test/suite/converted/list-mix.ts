// Converted from test/suite/corpus/list-mix.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(m.list(m.item(['Bullet List'])), m.enum(m.item(['Numbered List'])), m.terms(m.term(['Term'], ['List']))),
  )
}
