// Converted from test/suite/corpus/issue-6090-math-overhang.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`f(t) = cases(
    1 quad & "if" 0 < t < 1\\,,
    0 quad & "otherwise"
)`,
      space,
      unsafeRaw.math.block`f(t) = cases(
    1 quad & "if" 0 < t < 1\\,,
    0 quad & "otherwise.",
)`,
      space,
      unsafeRaw.math.block`f(t) = cases(
    1 quad & "if" 0 < t < 1\\,,
    0 quad & "otherwise,",
)`,
      space,
      unsafeRaw.math.block`f(t) = cases(
    1 quad & "if" 0 < t < 1\\,,
    0 quad & "otherwise!",
)`,
    ),
  )
}
