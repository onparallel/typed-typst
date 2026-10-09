// Converted from test/suite/corpus/issue-5359-column-override-stays-inside-footer.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 3 },
        inline`Outside`,
        table.footer(inline`A`, table.cell({ x: 1 }, inline`B`), inline`C`, table.cell({ x: 1 }, inline`D`)),
      ),
    ),
  )
}
