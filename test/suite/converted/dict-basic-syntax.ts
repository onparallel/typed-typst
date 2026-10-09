// Converted from test/suite/corpus/dict-basic-syntax.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, dict, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dictDecl, dict_2] = let_('dict', dict({ normal: 1, 'spacy key': 2 }))
  return doc(
    inline(data({})),
    m.lines(dictDecl, inline(dict_2)),
    inline(test(unsafeRaw.code<any>`dict.normal`, 1), space, test(dict_2.at('spacy key'), 2)),
  )
}
