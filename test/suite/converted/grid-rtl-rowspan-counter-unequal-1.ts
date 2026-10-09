// Converted from test/suite/corpus/grid-rtl-rowspan-counter-unequal-1.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  center,
  context,
  counter,
  doc,
  fr,
  grid,
  inline,
  let_,
  m,
  pt,
  rtl,
  set,
  space,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [testDecl, test] = let_('test', counter('test'))
  return doc(
    m.lines(
      set(text, { dir: rtl }),
      testDecl,
      inline(
        grid(
          { columns: [fr(1), fr(1)], inset: pt(5), align: center },
          grid.cell(
            { rowspan: 5 },
            inline`${space}b: ${test.step()} ${unsafeRaw.code<any>`context test.get().first()`}${space}`,
          ),
          grid.cell(
            { rowspan: 2 },
            inline`${space}a: ${test.step()} ${unsafeRaw.code<any>`context test.get().first()`}${space}`,
          ),
          grid.cell(
            { rowspan: 3 },
            inline`${space}c: ${test.step()} ${unsafeRaw.code<any>`context test.get().first()`}${space}`,
          ),
        ),
      ),
    ),
  )
}
