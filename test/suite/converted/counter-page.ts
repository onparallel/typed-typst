// Converted from test/suite/corpus/counter-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, counter, define, doc, inline, m, page, pagebreak, pt, set, space } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { height: pt(50), margin: { bottom: pt(20), rest: pt(10) } }),
      inline(
        lines(4),
        space,
        set(page, { numbering: '(i)' }),
        space,
        lines(2),
        space,
        pagebreak(),
        space,
        set(page, { numbering: '1 / 1' }),
        space,
        counter(page).update(1),
        space,
        lines(7),
      ),
    ),
  )
}
