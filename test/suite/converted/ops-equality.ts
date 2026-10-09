// Converted from test/suite/corpus/ops-equality.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [tDecl, t] = let_('t', inline`a`)
  return doc(
    inline(
      test(unsafeRaw.code<any>`1 == "hi"`, false),
      space,
      test(unsafeRaw.code<any>`1 == 1.0`, true),
      space,
      test(unsafeRaw.code<any>`30% == 30% + 0cm`, true),
      space,
      test(unsafeRaw.code<any>`1in == 0% + 72pt`, true),
      space,
      test(unsafeRaw.code<any>`30% == 30% + 1cm`, false),
      space,
      test(unsafeRaw.code<any>`"ab" == "a" + "b"`, true),
      space,
      test(unsafeRaw.code<any>`() == (1,)`, false),
      space,
      test(unsafeRaw.code<any>`(1, 2, 3) == (1, 2.0) + (3,)`, true),
      space,
      test(unsafeRaw.code<any>`(:) == (a: 1)`, false),
      space,
      test(unsafeRaw.code<any>`(a: 2 - 1.0, b: 2) == (b: 2, a: 1)`, true),
      space,
      test(unsafeRaw.code<any>`"a" != "a"`, false),
      space,
      test(unsafeRaw.code<any>`decimal("1.234") == decimal("1.23400000000")`, true),
      space,
      test(unsafeRaw.code<any>`235 == decimal("235.0")`, true),
    ),
    inline(
      test(unsafeRaw.code<any>`test == test`, true),
      space,
      test(unsafeRaw.code<any>`(() => {}) == (() => {})`, false),
    ),
    m.lines(
      tDecl,
      inline(
        test(unsafeRaw.code<any>`t == t`, true),
        space,
        test(unsafeRaw.code<any>`[] == []`, true),
        space,
        test(unsafeRaw.code<any>`[a] == [a]`, true),
        space,
        test(unsafeRaw.code<any>`grid[a] == grid[a]`, true),
        space,
        test(unsafeRaw.code<any>`grid[a] == grid[b]`, false),
      ),
    ),
  )
}
