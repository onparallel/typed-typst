// Converted from test/suite/corpus/dict-dynamic-duplicate-key.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [aDecl, a] = let_('a', 'hello')
  const [bDecl, b] = let_('b', 'world')
  const [cDecl, c] = let_('c', 'value')
  const [dDecl, d] = let_('d', 'conflict')
  return doc(
    m.lines(aDecl, bDecl, cDecl, dDecl),
    inline(
      test(unsafeRaw.code<any>`((a): b)`, { hello: 'world' }),
      space,
      test(unsafeRaw.code<any>`((a): 1, (a): 2)`, { hello: 2 }),
      space,
      test(unsafeRaw.code<any>`(hello: 1, (a): 2)`, { hello: 2 }),
      space,
      test(unsafeRaw.code<any>`(a + b: c, (a + b): d, (a): "value2", a: "value3")`, {
        helloworld: 'conflict',
        hello: 'value2',
        a: 'value3',
      }),
    ),
  )
}
