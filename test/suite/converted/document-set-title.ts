// Converted from test/suite/corpus/document-set-title.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, document, inline, m, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(document, { title: inline`Hello` }), inline`What's up?`))
}
