// Converted from test/suite/corpus/issue-hyphenate-after-tag.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, emph, m, metadata, page, pt, red, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(50) }),
      set(text, { hyphenate: true }),
      show('Tree', emph),
      show(emph, set(text, { fill: red })),
      show(emph, (it, ctx) => add(it, metadata(null))),
      'Treebeard',
    ),
  )
}
