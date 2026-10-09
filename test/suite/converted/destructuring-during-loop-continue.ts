// Converted from test/suite/corpus/destructuring-during-loop-continue.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`for num in (1, 2, 3, 1) {
  let (word, roman) = if num == 1 {
    ("one", "I")
  } else if num == 2 {
    ("two", "II")
  } else {
    continue
  }
  [#word = #roman \\ ]
}`),
  )
}
