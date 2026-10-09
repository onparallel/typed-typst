// Converted from test/suite/corpus/math-equation-numbering.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  codeBlock,
  context,
  doc,
  inline,
  label,
  labelled,
  m,
  math,
  page,
  pt,
  ref,
  set,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show((it, ctx) =>
        context((ctx_2) =>
          codeBlock([set(page, { width: pt(150) }, { if: unsafeRaw.code<any>`target() == "paged"` })], it),
        ),
      ),
      set(math.equation, { numbering: '(I)' }),
    ),
    inline`We define ${unsafeRaw.math`x`} in preparation of ${ref(label('fib'))}: ${labelled([unsafeRaw.math.block`phi.alt := (1 + sqrt(5)) / 2`, space], label('ratio'))}`,
    inline`With ${ref(label('ratio'))}, we get ${labelled([unsafeRaw.math.block`F_n = round(1 / sqrt(5) phi.alt^n)`, space], label('fib'))}`,
  )
}
