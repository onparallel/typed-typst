// Converted from test/universe/corpus/soviet-matrix.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, m, show } from '../../../src/index.ts'

export default () => {
  const game = external('game')
  const game_with = define('with').named('seed', T.any, null).returns(T.any).external(game)
  return doc(m.lines(importPackage('@preview/soviet-matrix:0.2.1', [game]), show(game_with({ seed: 0 }))))
}
