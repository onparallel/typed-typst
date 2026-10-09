// Converted from test/suite/corpus/math-text-single-grapheme-cluster.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, math, set, show, space, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`𝒟 𝒟︀ 𝒟︁`,
      space,
      show(math.equation, set(text, { font: 'Noto Sans Math' })),
      space,
      unsafeRaw.math.block`𝒟 𝒟︀ 𝒟︁`,
    ),
  )
}
