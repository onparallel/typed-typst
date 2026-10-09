// Converted from test/suite/corpus/mozilla-mathml-test-24.typ by scripts/convert-suite.ts — do not edit.
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
      inline(unsafeRaw.math.block`det mat(
    delim: \\|,
    c_0, c_1, c_2, dots.c, c_n;
    c_1, c_2, c_3, dots.c, c_(n + 1);
    c_2, c_3, c_4, dots.c, c_(n + 2);
    dots.v, dots.v, dots.v, , dots.v;
    c_n, c_(n + 1), c_(n + 2), dots.c, c_(2 n);
  ) > 0`),
    ),
  )
}
