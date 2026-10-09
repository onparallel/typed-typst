// Converted from test/suite/corpus/field-call-accent-assign-during-non-mut-access.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, data, define, doc, inline, let_, sym, symbol, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [spDictDecl, spDict] = let_('sp-dict', { sym: symbol('p', ['push', sym.tilde]) })
  const [arrayDecl, array_2] = let_('array', data(['sym', 'sym']))
  return doc(
    inline(
      codeBlock([
        spDictDecl,
        arrayDecl,
        unsafeRaw.code<any>`sp-dict.at(array.pop()) = sp-dict.at(array.pop()).push(none)`,
        test(array_2, []),
      ]),
    ),
  )
}
