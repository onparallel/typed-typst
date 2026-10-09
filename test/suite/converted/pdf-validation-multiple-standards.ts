// Converted from test/suite/corpus/pdf-validation-multiple-standards.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { datetime, doc, document, m, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(document, { date: datetime({ year: 1970, month: 1, day: 1 }) }), 'Hello'))
}
