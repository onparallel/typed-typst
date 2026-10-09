// Converted from test/suite/corpus/math-cancel-display.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, page, set, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      inline(
        unsafeRaw.math.block`a + b + cancel(b + c) - cancel(b) - cancel(c) - 5 + cancel(6) - cancel(6)`,
        space,
        unsafeRaw.math.block`e + (a dot.c cancel((b + c + d)))/(cancel(b + c + d))`,
      ),
    ),
  )
}
