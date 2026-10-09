// Converted from test/suite/corpus/math-stretch-horizontal-attach.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, codeBlock, context, doc, inline, page, set, show, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    show((it, ctx) =>
      context((ctx_2) => codeBlock([set(page, { width: auto }, { if: unsafeRaw.code<any>`target() == "paged"` })], it)),
    ),
    inline(
      unsafeRaw.math`stretch(stretch(=, size: #4em))_A`,
      space,
      unsafeRaw.math`stretch(arrow.hook, size: #5em)^"injective map"`,
      space,
      unsafeRaw.math`stretch(arrow.hook, size: #200%)^"injective map"`,
    ),
    inline(unsafeRaw.math.block`P = Q
    stretch(=)^(k = 0)_(forall i) R
    stretch(=, size: #150%)^(k = 0)_(forall i) S
    stretch(=, size: #2mm)^(k = 0)_(forall i) T \\
  U stretch(equiv)^(forall i)_"Chern-Weil" V
    stretch(equiv, size: #(120% + 2mm))^(forall i)_"Chern-Weil" W`),
  )
}
