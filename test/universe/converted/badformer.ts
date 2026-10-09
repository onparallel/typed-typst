// Converted from test/universe/corpus/badformer.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, importPackage, m, path, read, show } from '../../../src/index.ts'

export default () => {
  const game = define('game').pos('arg1', T.any).returns(T.any).external()
  return doc(m.lines(importPackage('@preview/badformer:0.1.0', [game]), show(game(read(path('main.typ'))))))
}
