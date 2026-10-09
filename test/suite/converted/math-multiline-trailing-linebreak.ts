// Converted from test/suite/corpus/math-multiline-trailing-linebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`${unsafeRaw.math.block`"abc" &= c \\`} One trailing line break.`)
}
