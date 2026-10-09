// Converted from test/suite/corpus/show-text-exactly-once.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, show } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show('A', inline`BB`), show('B', inline`CC`), 'AA (8)'))
}
