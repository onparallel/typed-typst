// Converted from test/suite/corpus/decimal-constructor.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, decimal, define, doc, inline, space, type } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(decimal(10), decimal('10.0')),
      space,
      test(decimal('-7654.321'), decimal('-7654.321')),
      space,
      test(decimal('−7654.321'), decimal('-7654.321')),
      space,
      test(decimal(codeBlock([], 3.141592653)), decimal('3.141592653000000012752934707')),
      space,
      test(decimal(codeBlock([], -3.141592653)), decimal('-3.141592653000000012752934707')),
      space,
      test(decimal(decimal(3)), decimal('3.0')),
      space,
      test(decimal(true), decimal('1.0')),
      space,
      test(type(decimal(10)), decimal),
    ),
  )
}
