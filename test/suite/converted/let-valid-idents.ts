// Converted from test/suite/corpus/let-valid-idents.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [nameDecl, name] = let_('name', 1)
  const [name_Decl, name_] = let_('name_', 1)
  const [name2Decl, name2] = let_('name-2', 1)
  const [name_2Decl, name_2] = let_('name_2', 1)
  const [__nameDecl, __name] = let_('__name', 1)
  const [_______Decl, _______] = let_('ůñıćóðė', 1)
  return doc(
    m.lines(
      nameDecl,
      inline(
        test(name, 1),
        space,
        name_Decl,
        space,
        test(name_, 1),
        space,
        name2Decl,
        space,
        test(name2, 1),
        space,
        name_2Decl,
        space,
        test(name_2, 1),
        space,
        __nameDecl,
        space,
        test(__name, 1),
        space,
        _______Decl,
        space,
        test(_______, 1),
      ),
    ),
  )
}
