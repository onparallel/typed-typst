// Converted from test/suite/corpus/math-size-math-content-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [sumDecl, sum] = let_('sum', unsafeRaw.math`sum^2`)
  const height = define('height')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`context measure(x).height`)
  return doc(
    m.lines(
      sumDecl,
      height.decl,
      inline(unsafeRaw.math`sum = height(sum)`, space, unsafeRaw.math.block`sum != height(sum)`),
    ),
  )
}
