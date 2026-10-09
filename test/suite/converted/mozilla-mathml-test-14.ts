// Converted from test/suite/corpus/mozilla-mathml-test-14.typ by scripts/convert-suite.ts — do not edit.
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
      inline(unsafeRaw.math.block`(partial^2 / (partial x^2) + partial^2 / (partial y^2)) abs(phi(x + i y))^2 = 0`),
    ),
  )
}
