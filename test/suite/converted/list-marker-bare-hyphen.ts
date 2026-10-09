// Converted from test/suite/corpus/list-marker-bare-hyphen.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, list, m, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(list, { marker: inline`-` }), m.list(m.item(['Bare hyphen is']), m.item(['a bad marker']))))
}
