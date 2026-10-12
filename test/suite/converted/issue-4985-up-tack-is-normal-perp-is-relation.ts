// Converted from test/suite/corpus/issue-4985-up-tack-is-normal-perp-is-relation.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`top = 1 \\
  bot = 2 \\
  a perp b`),
  )
}
