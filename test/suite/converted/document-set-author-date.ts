// Converted from test/suite/corpus/document-set-author-date.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { datetime, doc, document, set } from '../../../src/index.ts'

export default () => {
  return doc(set(document, { author: ['A', 'B'], date: datetime.today() }))
}
