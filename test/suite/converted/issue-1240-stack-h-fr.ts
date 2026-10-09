// Converted from test/suite/corpus/issue-1240-stack-h-fr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, fr, h, inline, ltr, space, stack } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      stack({ dir: ltr }, inline`a`, fr(1), inline`b`, fr(1), inline`c`),
      space,
      stack({ dir: ltr }, inline`a`, h(fr(1)), inline`b`, h(fr(1)), inline`c`),
    ),
  )
}
