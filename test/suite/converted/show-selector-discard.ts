// Converted from test/suite/corpus/show-selector-discard.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, m, show } from '../../../src/index.ts'

export default () => {
  return doc(
    show(heading, null),
    m.lines('Where is', m.heading(1, 'There are no headings around here!'), 'my heading?'),
  )
}
