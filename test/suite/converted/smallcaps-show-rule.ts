// Converted from test/suite/corpus/smallcaps-show-rule.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, red, set, show, smallcaps, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show(smallcaps, set(text, { font: 'PT Sans' })), inline(smallcaps(inline`Smallcaps`))),
    m.lines(show(smallcaps, set(text, { fill: red })), inline(smallcaps(inline`Smallcaps`))),
  )
}
