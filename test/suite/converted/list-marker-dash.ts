// Converted from test/suite/corpus/list-marker-dash.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, list, m, set, sym } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(list, { marker: inline`--` }), m.list(m.item(['A']), m.item(['B']))))
}
