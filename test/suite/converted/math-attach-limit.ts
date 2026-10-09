// Converted from test/suite/corpus/math-attach-limit.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`lim_(n->oo \\ n "grows") sum_(k=0 \\ k in NN)^n k`))
}
