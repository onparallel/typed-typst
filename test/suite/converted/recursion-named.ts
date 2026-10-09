// Converted from test/suite/corpus/recursion-named.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const fib = define('fib')
    .pos('n', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  if n <= 2 {
    1
  } else {
    fib(n - 1) + fib(n - 2)
  }
}`,
    )
  return doc(fib.decl, inline(test(fib(10), 55)))
}
