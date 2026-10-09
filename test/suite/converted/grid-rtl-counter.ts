// Converted from test/suite/corpus/grid-rtl-counter.typ by scripts/convert-suite.ts — do not edit.
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
          inline`${space}a: ${test.step()} ${unsafeRaw.code<any>`context test.get().first()`}${space}`,
          inline`${space}b: ${test.step()} ${unsafeRaw.code<any>`context test.get().first()`}${space}`,
        ),
      ),
    ),
  )
}
