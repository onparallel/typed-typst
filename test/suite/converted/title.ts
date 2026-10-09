// Converted from test/suite/corpus/title.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, document, inline, m, set, title } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(document, { title: inline`My title` }), inline(title()), m.heading(1, 'A level one heading')))
}
