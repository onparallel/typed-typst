// Converted from test/universe/corpus/vocabulo.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, importPackage, let_, show } from '../../../src/index.ts'

export default () => {
  const vocabulo = define('vocabulo').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [wordsDecl, words] = let_(
    'words',
    data([
      ['hello', 'hallo'],
      ['goodbye', 'auf Wiedersehen'],
    ]),
  )
  return doc(
    importPackage('@preview/vocabulo:0.2.0', [vocabulo]),
    wordsDecl,
    show(vocabulo(words, ['English', 'German'])),
  )
}
