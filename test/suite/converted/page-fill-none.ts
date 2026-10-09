// Converted from test/suite/corpus/page-fill-none.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, green, inline, m, page, rect, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { fill: null }), inline(rect({ fill: green }))))
}
