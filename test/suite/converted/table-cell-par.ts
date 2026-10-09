// Converted from test/suite/corpus/table-cell-par.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, highlight, inline, par, show, table } from '../../../src/index.ts'

export default () => {
  return doc(show(par, highlight), inline(table({ columns: 3 }, inline`A`, block(inline`B`), par(inline`C`))))
}
