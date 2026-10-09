// Converted from test/suite/corpus/math-attach-default-placement.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, codeBlock, context, doc, inline, m, page, set, show, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show((it, ctx) =>
        context((ctx_2) =>
          codeBlock([set(page, { width: auto }, { if: unsafeRaw.code<any>`target() == "paged"` })], it),
        ),
      ),
      inline(
        unsafeRaw.math.block`a =^"def" b quad a lt.eq_"really" b quad  a arrow.r.long.squiggly^"slowly" b`,
        space,
        unsafeRaw.math`a =^"def" b quad a lt.eq_"really" b quad a arrow.r.long.squiggly^"slowly" b`,
      ),
    ),
    inline(
      unsafeRaw.math`a scripts(=)^"def" b quad a scripts(lt.eq)_"really" b quad a scripts(arrow.r.long.squiggly)^"slowly" b`,
    ),
  )
}
