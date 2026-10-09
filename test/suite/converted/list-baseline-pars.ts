// Converted from test/suite/corpus/list-baseline-pars.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, lorem, m } from '../../../src/index.ts'

export default () => {
  return doc(m.list(m.item([lorem(8)], inline(lorem(8)))))
}
