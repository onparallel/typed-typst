// Converted from test/suite/corpus/colbreak-weak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { colbreak, doc, inline, m, page, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { columns: 2 }), inline`${colbreak({ weak: true })} A ${colbreak({ weak: true })} B`))
}
