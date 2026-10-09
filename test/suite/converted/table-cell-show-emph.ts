// Converted from test/suite/corpus/table-cell-show-emph.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, emph, inline, show, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      codeBlock(
        [show(table.cell, emph)],
        table({ columns: 2 }, inline`Person`, inline`Animal`, inline`John`, inline`Dog`),
      ),
    ),
  )
}
