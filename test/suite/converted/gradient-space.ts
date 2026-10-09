// Converted from test/suite/corpus/gradient-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cmyk,
  color,
  define,
  doc,
  gradient,
  green,
  inline,
  luma,
  oklab,
  oklch,
  red,
  rgb,
  space,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(gradient.linear({ space: rgb }, red, green).space(), rgb),
      space,
      test(gradient.linear({ space: oklab }, red, green).space(), oklab),
      space,
      test(gradient.linear({ space: oklch }, red, green).space(), oklch),
      space,
      test(gradient.linear({ space: cmyk }, red, green).space(), cmyk),
      space,
      test(gradient.linear({ space: luma }, red, green).space(), luma),
      space,
      test(gradient.linear({ space: color.linearRgb }, red, green).space(), color.linearRgb),
      space,
      test(gradient.linear({ space: color.hsl }, red, green).space(), color.hsl),
      space,
      test(gradient.linear({ space: color.hsv }, red, green).space(), color.hsv),
    ),
  )
}
