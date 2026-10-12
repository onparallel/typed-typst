// Converted from test/suite/corpus/show-text-line-wrapping.typ by scripts/convert-suite.ts — do not edit.
import { doc, m, show } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show('start end', 'word'), 'start end'))
}
