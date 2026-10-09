// Converted from test/suite/corpus/math-attach-limit-long.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`attach(product, t: 123456789) attach(product, t: 123456789, bl: x) \\
  attach(product, b: 123456789) attach(product, b: 123456789, tr: x)`,
      space,
      unsafeRaw.math`attach(limits(product), t: 123456789) attach(limits(product), t: 123456789, bl: x)`,
    ),
    inline(unsafeRaw.math`attach(limits(product), b: 123456789) attach(limits(product), b: 123456789, tr: x)`),
  )
}
