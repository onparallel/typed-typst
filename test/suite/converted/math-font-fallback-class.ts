// Converted from test/suite/corpus/math-font-fallback-class.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, show, space, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(text, { font: 'Garamond-Math', fallback: false })),
      inline(
        unsafeRaw.math.block`brace.stroked.l -1 brace.stroked.r`,
        space,
        unsafeRaw.math.block`lr(brace.stroked.l -1 brace.stroked.r)`,
      ),
    ),
  )
}
