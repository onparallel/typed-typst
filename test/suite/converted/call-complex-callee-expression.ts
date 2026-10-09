// Converted from test/suite/corpus/call-complex-callee-expression.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, codeBlock, define, doc, inline, str, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const adder = define('adder')
    .pos('dx', T.any)
    .returns(T.any)
    .body((p) => (x) => add(x, p['dx']))
  return doc(
    inline(
      codeBlock([test(unsafeRaw.code<any>`(type)("hi")`, str), adder.decl, test(unsafeRaw.code<any>`adder(2)(5)`, 7)]),
    ),
  )
}
