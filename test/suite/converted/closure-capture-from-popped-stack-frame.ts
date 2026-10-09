// Converted from test/suite/corpus/closure-capture-from-popped-stack-frame.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, call, codeBlock, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [markDecl, mark] = let_('mark', '!')
  const [hiDecl, hi] = let_('hi', 'Hi')
  const [greetDecl, greet] = let_(
    'greet',
    codeBlock([hiDecl, (name) => codeBlock([], add(add(add(hi, ', '), name), mark))]),
  )
  return doc(
    inline(
      codeBlock([
        markDecl,
        greetDecl,
        test(call(greet, 'Typst'), 'Hi, Typst!'),
        unsafeRaw.code<any>`mark = "?"`,
        test(call(greet, 'Typst'), 'Hi, Typst!'),
      ]),
    ),
  )
}
