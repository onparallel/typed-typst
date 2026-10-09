// Converted from test/suite/corpus/math-lr-ignore-ignorant.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, codeBlock, context, doc, inline, show, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      box(unsafeRaw.math.block`(1 / 2)`),
      space,
      box(codeBlock([show('(', (it, ctx) => context((ctx_2) => it))], unsafeRaw.math.block`(1 / 2)`)),
      space,
      box(codeBlock([show(')', (it_2, ctx_3) => context((ctx_4) => it_2))], unsafeRaw.math.block`(1 / 2)`)),
      space,
      box(
        codeBlock(
          [show('(', (it_3, ctx_5) => context((ctx_6) => it_3)), show(')', (it_4, ctx_7) => context((ctx_8) => it_4))],
          unsafeRaw.math.block`(1 / 2)`,
        ),
      ),
    ),
  )
}
