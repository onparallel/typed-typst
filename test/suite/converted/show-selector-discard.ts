// Converted from test/suite/corpus/show-selector-discard.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m, show } from '../../../src/index.ts'

export default () => {
  return doc(
    show(heading, null),
    m.lines('Where is', heading({ depth: 1 }, inline('There are no headings around here!')), 'my heading?'),
  )
}
