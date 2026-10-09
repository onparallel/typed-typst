// Converted from test/suite/corpus/figure-caption-where-selector.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, inline, table, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    unsafeRaw.markup`#show figure.caption.where(kind: table): underline`,
    inline(figure({ caption: inline`Not underlined` }, inline`Not a table`)),
    inline(figure({ caption: inline`Underlined` }, table(inline`A table`))),
  )
}
