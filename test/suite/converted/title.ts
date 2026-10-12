// Converted from test/suite/corpus/title.typ by scripts/convert-suite.ts — do not edit.
import { doc, document, heading, inline, m, set, title } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(document, { title: inline`My title` }),
      inline(title()),
      heading({ depth: 1 }, inline('A level one heading')),
    ),
  )
}
