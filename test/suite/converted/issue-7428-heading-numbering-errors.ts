// Converted from test/suite/corpus/issue-7428-heading-numbering-errors.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, m, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    set(heading, {
      numbering: unsafeRaw.code<any>`(n, ..nums) => {
  assert(n > 0)
  [#n]
}`,
    }),
    m.heading(1, 'A'),
  )
}
