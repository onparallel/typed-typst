// Converted from test/suite/corpus/gradient-text-decoration.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  blue,
  doc,
  gradient,
  inline,
  linebreak,
  overline,
  red,
  set,
  strike,
  text,
  underline,
} from '../../../src/index.ts'

export default () => {
  return doc(
    set(text, { fill: gradient.linear(red, blue) }),
    inline`Hello ${underline(inline`World`)}! ${linebreak()} Hello ${overline(inline`World`)}! ${linebreak()}
Hello ${strike(inline`World`)}! ${linebreak()}`,
  )
}
