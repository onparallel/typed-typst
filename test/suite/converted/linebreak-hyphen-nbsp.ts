// Converted from test/suite/corpus/linebreak-hyphen-nbsp.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, sym, symbol } from '../../../src/index.ts'

export default () => {
  return doc(inline`There are non${symbol('‑')}breaking${sym.space.nobreak}characters.`)
}
