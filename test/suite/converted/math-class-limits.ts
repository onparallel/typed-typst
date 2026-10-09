// Converted from test/suite/corpus/math-class-limits.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`class("normal", ->)_a`,
      space,
      unsafeRaw.math`class("relation", x)_a`,
      space,
      unsafeRaw.math.block`class("large", x)_a`,
      space,
      unsafeRaw.math`class("large", ->)_a`,
    ),
    inline(unsafeRaw.math`limits(class("normal", ->))_a`, space, unsafeRaw.math.block`scripts(class("relation", x))_a`),
  )
}
