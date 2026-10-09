// Converted from test/suite/corpus/func-with.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, define, doc, inline, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const add_2 = define('add')
    .pos('x', T.any)
    .pos('y', T.any)
    .returns(T.any)
    .body((p) => add(p['x'], p['y']))
  const inc = define('inc')
    .pos('x', T.any)
    .named('y', T.any, 1)
    .returns(T.any)
    .body((p) => add(p['x'], p['y']))
  const times_2 = define('times')
    .rest('sink', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  let res = sink.pos().product()
  if sink.named().at("negate", default: false) { res *= -1 }
  res
}`,
    )
  return doc(
    m.lines(
      add_2.decl,
      inline(
        test(unsafeRaw.code<any>`add.with(2)(3)`, 5),
        space,
        test(unsafeRaw.code<any>`add.with(2, 3)()`, 5),
        space,
        test(unsafeRaw.code<any>`add.with(2).with(3)()`, 5),
        space,
        test(unsafeRaw.code<any>`(add.with(2))(4)`, 6),
        space,
        test(unsafeRaw.code<any>`(add.with(2).with(3))()`, 5),
      ),
    ),
    m.lines(inc.decl, inline(test(inc(1), 2))),
    m.lines(
      unsafeRaw.markup`#let inc2 = inc.with(y: 2)`,
      inline(test(unsafeRaw.code<any>`inc2(2)`, 4), space, test(unsafeRaw.code<any>`inc2(2, y: 4)`, 6)),
    ),
    m.lines(
      times_2.decl,
      inline(
        test(unsafeRaw.code<any>`(times.with(2, negate: true).with(5))()`, -10),
        space,
        test(unsafeRaw.code<any>`(times.with(2).with(5).with(negate: true))()`, -10),
        space,
        test(unsafeRaw.code<any>`(times.with(2).with(5, negate: true))()`, -10),
        space,
        test(unsafeRaw.code<any>`(times.with(2).with(negate: true))(5)`, -10),
      ),
    ),
  )
}
