// Converted from test/suite/corpus/return-in-first-arg.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const sum = define('sum')
    .rest('args', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  let s = 0
  for v in args.pos() {
    s += v
  }
  s
}`,
    )
  const f = define('f')
    .returns(T.any)
    .body((p) => codeBlock([unsafeRaw.code<any>`sum(..return, 1, 2, 3)`, 'nope']))
  return doc(sum.decl, f.decl, inline(test(f(), 6)))
}
