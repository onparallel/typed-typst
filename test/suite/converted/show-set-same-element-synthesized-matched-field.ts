// Converted from test/suite/corpus/show-set-same-element-synthesized-matched-field.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, inline, m, raw, set, show, table, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(where(figure, { kind: table }), set(figure, { kind: raw })),
      inline(figure({ caption: inline`Code` }, table(inline`A`))),
    ),
  )
}
