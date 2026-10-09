// Converted from test/suite/corpus/grid-subheaders-demo.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { center, doc, em, inline, m, page, set, strong, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(15.2) }),
      inline(
        table(
          { columns: 2, align: center },
          table.header(table.cell({ colspan: 2 }, inline(strong(inline`Regional User Data`)))),
          table.header(
            { level: 2 },
            table.cell({ colspan: 2 }, inline(strong(inline`Germany`))),
            inline(strong(inline`Username`)),
            inline(strong(inline`Joined`)),
          ),
          inline`john123`,
          inline`2024`,
          inline`rob8`,
          inline`2025`,
          inline`joe1`,
          inline`2025`,
          inline`joe2`,
          inline`2025`,
          inline`martha`,
          inline`2025`,
          inline`pear`,
          inline`2025`,
          table.header(
            { level: 2 },
            table.cell({ colspan: 2 }, inline(strong(inline`United States`))),
            inline(strong(inline`Username`)),
            inline(strong(inline`Joined`)),
          ),
          inline`cool4`,
          inline`2023`,
          inline`roger`,
          inline`2023`,
          inline`bigfan55`,
          inline`2022`,
        ),
      ),
    ),
  )
}
