// Converted from test/suite/corpus/math-call-non-func-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, math, regex, show, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      show(regex('[,;]'), math.class.with('fence')),
      inline(
        unsafeRaw.math.block`phi(| , | ; |) \\
  phi/**/(| , | ; |)`,
        space,
        test(unsafeRaw.math.block`phi(| , | ; |)`, unsafeRaw.math.block`phi/**/(| , | ; |)`),
      ),
    ),
  )
}
