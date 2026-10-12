// Converted from test/suite/corpus/title-with-body-auto.typ by scripts/convert-suite.ts — do not edit.
import { auto, doc, document, inline, m, set, title } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(document, { title: inline`My title` }), inline(title(auto))))
}
