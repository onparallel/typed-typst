// Converted from test/suite/corpus/math-root-show-rule-3.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show('√', '!'), inline(unsafeRaw.math.block`sqrt(2) root(2, 2)`)))
}
