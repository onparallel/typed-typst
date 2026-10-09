// Converted from test/suite/corpus/sub-super-non-typographic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, set, sub, super_, sym } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(super_, { typographic: false, baseline: em(-0.25), size: em(0.7) }),
      inline`n${super_(inline`1`)}, n${sub(inline`2`)}, ... n${super_(inline`N`)}`,
    ),
  )
}
