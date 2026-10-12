// Converted from test/suite/corpus/issue-7428-heading-numbering-errors.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    set(heading, {
      numbering: unsafeRaw.code<any>`(n, ..nums) => {
  assert(n > 0)
  [#n]
}`,
    }),
    heading({ depth: 1 }, inline('A')),
  )
}
