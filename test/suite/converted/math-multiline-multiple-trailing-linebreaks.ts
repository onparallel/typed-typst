// Converted from test/suite/corpus/math-multiline-multiple-trailing-linebreaks.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`${unsafeRaw.math.block`"abc" &= c \\ \\ \\`} Multiple trailing line breaks.`)
}
