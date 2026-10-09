// Converted from test/suite/corpus/issue-5489-matrix-stray-linebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, center, doc, horizon, inline, pt, table, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: times([pt(70)], 1), align: add(horizon, center), stroke: pt(0.6) },
        inline(unsafeRaw.math`mat(2241/2210,-71/1105;-71/1105,147/1105)`),
      ),
    ),
  )
}
