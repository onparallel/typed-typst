// Converted from test/suite/corpus/mozilla-mathml-test-21.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, codeBlock, context, doc, inline, m, page, set, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show((it, ctx) =>
        context((ctx_2) =>
          codeBlock([set(page, { width: auto }, { if: unsafeRaw.code<any>`target() == "paged"` })], it),
        ),
      ),
      inline(unsafeRaw.math.block`sum_(p "prime") f(p) = integral_(t > 1) f(t) dif pi(t)`),
    ),
  )
}
