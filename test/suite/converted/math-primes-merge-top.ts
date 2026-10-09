// Converted from test/suite/corpus/math-primes-merge-top.typ by scripts/convert-suite.ts — do not edit.
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
      inline(unsafeRaw.math.block`attach(a, tr: ', t: b)
  &quad attach(attach(a, tr: '), t: b)
  &quad attach(attach(a, t: b), tr: ')
  &quad attach(attach(attach(a, tl: '), t: b), tr: ')
  &quad attach(attach(attach(a, tr: '), t: b), tr: ')
  \\
  // When the base has limits, top prime merging is invariant of t/tr order.
               attach(product, tr: ', t: b)
  &quad attach(attach(product, tr: '), t: b)
  &quad attach(attach(product, t: b), tr: ')
  &quad attach(attach(attach(product, tl: '), t: b), tr: ')
  &quad attach(attach(attach(product, tr: '), t: b), tr: ')`),
    ),
  )
}
