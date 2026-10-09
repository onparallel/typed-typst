// Converted from test/suite/corpus/grid-auto-shrink.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, cm, doc, inline, m, minus, mm, page, pt, set, table, text, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: add(minus(mm(210), times(2, cm(2.5))), times(2, pt(10))) }),
      set(text, { size: pt(11) }),
      inline(
        table(
          { columns: 4 },
          inline`Hello!`,
          inline`Hello there, my friend!`,
          inline`Hello there, my friends! Hi!`,
          inline`Hello there, my friends! Hi! What is going on right now?`,
        ),
      ),
    ),
  )
}
