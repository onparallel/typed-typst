// Converted from test/suite/corpus/measure-counter-multiple-times.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, inline, pt, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      unsafeRaw.code<any>`context {
  let c = counter("c")
  let it = context c.get().first() * h(1pt)
  let u(n) = c.update(n)
  grid(columns: 5, u(17), it, u(1), it, u(5))
  metadata(measure(it).width)
}`,
      space,
      context((ctx_2) => test(unsafeRaw.code<any>`query(metadata).first().value`, pt(17))),
    ),
  )
}
