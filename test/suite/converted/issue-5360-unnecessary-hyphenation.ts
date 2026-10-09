// Converted from test/suite/corpus/issue-5360-unnecessary-hyphenation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, par, set, table } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(par, { justify: true }), inline(table({ columns: 1 }, inline`Formal`))))
}
