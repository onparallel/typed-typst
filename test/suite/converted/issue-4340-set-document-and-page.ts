// Converted from test/suite/corpus/issue-4340-set-document-and-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, document, gray, inline, m, page, pagebreak, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(document, { author: '' }), set(page, { fill: gray }), inline`text ${pagebreak()}`))
}
