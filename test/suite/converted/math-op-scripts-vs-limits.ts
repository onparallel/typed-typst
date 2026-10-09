// Converted from test/suite/corpus/math-op-scripts-vs-limits.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, codeBlock, context, doc, inline, m, page, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show((it, ctx) =>
        context((ctx_2) =>
          codeBlock([set(page, { width: auto }, { if: unsafeRaw.code<any>`target() == "paged"` })], it),
        ),
      ),
      set(text, { font: 'New Computer Modern' }),
      inline`Discuss ${unsafeRaw.math`lim_(n->oo) 1/n`} now. ${unsafeRaw.math.block`lim_(n->infinity) 1/n = 0`}`,
    ),
  )
}
