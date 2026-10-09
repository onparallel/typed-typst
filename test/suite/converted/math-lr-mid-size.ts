// Converted from test/suite/corpus/math-lr-mid-size.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, codeBlock, context, doc, inline, page, set, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    show((it, ctx) =>
      context((ctx_2) => codeBlock([set(page, { width: auto }, { if: unsafeRaw.code<any>`target() == "paged"` })], it)),
    ),
    inline(unsafeRaw.math.block`lr({ A mid(|) integral }) quad
  lr(size: #1em, { A mid(|) integral }) quad
  lr(size: #(1em+20%), { A mid(|) integral }) \\

  lr(] A mid(|) integral ]) quad
  lr(size: #1em, ] A mid(|) integral ]) quad
  lr(size: #(1em+20%), ] A mid(|) integral ]) \\

  lr(( A mid(|) integral ]) quad
  lr(size: #1em, ( A mid(|) integral ]) quad
  lr(size: #(1em+20%), ( A mid(|) integral ])`),
  )
}
