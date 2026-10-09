// Converted from test/suite/corpus/math-size-math-content-3.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const height = define('height')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`context measure(x).height`)
  return doc(m.lines(height.decl, inline(unsafeRaw.math.block`sum != height(sum)`)))
}
