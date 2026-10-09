// Converted from test/suite/corpus/dict-at-lvalue.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, dict, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dictDecl, dict_2] = let_('dict', dict({ a: 1, 'b b': 1 }))
  return doc(
    inline(
      codeBlock([
        dictDecl,
        unsafeRaw.code<any>`dict.at("b b") += 1`,
        unsafeRaw.code<any>`dict.state = (ok: true, err: false)`,
        test(dict_2, dict({ a: 1, 'b b': 2, state: { ok: true, err: false } })),
        test(unsafeRaw.code<any>`dict.state.ok`, true),
        unsafeRaw.code<any>`dict.at("state").ok = false`,
        test(unsafeRaw.code<any>`dict.state.ok`, false),
        test(unsafeRaw.code<any>`dict.state.err`, false),
      ]),
    ),
  )
}
