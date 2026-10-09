// Converted from test/suite/corpus/dict-fields.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dictDecl, dict_2] = let_('dict', { nothing: 'ness', hello: 'world' })
  return doc(
    m.lines(
      dictDecl,
      inline(
        test(unsafeRaw.code<any>`dict.nothing`, 'ness'),
        space,
        unsafeRaw.code<any>`{
  let world = dict
    .hello

  test(world, "world")
}`,
      ),
    ),
  )
}
