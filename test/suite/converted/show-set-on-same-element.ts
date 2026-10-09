// Converted from test/suite/corpus/show-set-on-same-element.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, inline, m, set, show, table, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(figure, { supplement: inline`Default` }),
      show(where(figure, { kind: table }), set(figure, { supplement: inline`Tableau` })),
      inline(
        figure({ caption: inline`Four letters` }, table({ columns: 2 }, inline`A`, inline`B`, inline`C`, inline`D`)),
      ),
    ),
  )
}
