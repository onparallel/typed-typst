// Converted from test/suite/corpus/arguments-filter.typ by scripts/convert-suite.ts — do not edit.
import { T, arguments_, calc, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(arguments_().filter(calc.even), arguments_()),
      space,
      test(arguments_({ a: 2, b: 3 }, 1, 4).filter(calc.even), arguments_({ a: 2 }, 4)),
      space,
      test(
        arguments_({ h: 7, e: 3, l: 2, o: 5 }, 1).filter((x) => unsafeRaw.code({ x })<any>`x < 5`),
        arguments_({ e: 3, l: 2 }, 1),
      ),
    ),
  )
}
