// Converted from test/suite/corpus/math-lr-mid-size-nested-equation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, codeBlock, context, doc, inline, let_, m, page, set, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [bodyDecl, body] = let_('body', unsafeRaw.math`{ A mid(|) integral }`)
  return doc(
    show((it, ctx) =>
      context((ctx_2) => codeBlock([set(page, { width: auto }, { if: unsafeRaw.code<any>`target() == "paged"` })], it)),
    ),
    m.lines(
      bodyDecl,
      inline(unsafeRaw.math.block`lr(body) quad
  lr(size: #1em, body) quad
  lr(size: #(1em+20%), body)`),
    ),
  )
}
