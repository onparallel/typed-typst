// Converted from test/suite/corpus/ops-assign.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, float, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [xDecl, x] = let_('x', 0)
  return doc(
    m.lines(
      xDecl,
      inline(
        unsafeRaw.code<any>`(x = 10)`,
        space,
        test(x, 10),
        space,
        unsafeRaw.code<any>`(x -= 5)`,
        space,
        test(x, 5),
        space,
        unsafeRaw.code<any>`(x += 1)`,
        space,
        test(x, 6),
        space,
        unsafeRaw.code<any>`(x *= x)`,
        space,
        test(x, 36),
        space,
        unsafeRaw.code<any>`(x /= 2.0)`,
        space,
        test(x, float(18)),
        space,
        unsafeRaw.code<any>`(x = "some")`,
        space,
        test(x, 'some'),
        space,
        unsafeRaw.code<any>`(x += "thing")`,
        space,
        test(x, 'something'),
      ),
    ),
  )
}
