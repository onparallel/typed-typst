// Converted from test/suite/corpus/context-body-atomic-in-markup.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [cDecl, c] = let_('c', inline`${context((ctx) => 'hello')}.`)
  return doc(
    m.lines(
      cDecl,
      inline(
        test(unsafeRaw.code<any>`c.children.first().func()`, unsafeRaw.code<any>`(context none).func()`),
        space,
        test(unsafeRaw.code<any>`c.children.last()`, inline`.`),
      ),
    ),
  )
}
