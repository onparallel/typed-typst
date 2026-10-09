// Converted from test/suite/corpus/math-root-show-rule-4.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, red, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show(math.root, set(text, { fill: red })), inline(unsafeRaw.math.block`sqrt(x + y) root(4, 2)`)))
}
