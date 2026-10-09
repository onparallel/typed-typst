// Converted from test/suite/corpus/call-args-spread-override.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, codeBlock, define, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const f = define('f')
    .named('style', T.any, 'normal')
    .named('weight', T.any, 'regular')
    .returns(T.any)
    .body((p) => codeBlock([], add(add(add(add('(style: ', p['style']), ', weight: '), p['weight']), ')')))
  const myf = define('myf')
    .rest('args', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`f(weight: "bold", ..args)`)
  return doc(
    inline(
      codeBlock([
        f.decl,
        myf.decl,
        test(myf(), '(style: normal, weight: bold)'),
        test(myf({ weight: 'black' }), '(style: normal, weight: black)'),
        test(myf({ style: 'italic' }), '(style: italic, weight: bold)'),
      ]),
    ),
  )
}
