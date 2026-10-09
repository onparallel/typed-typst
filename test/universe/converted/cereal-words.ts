// Converted from test/universe/corpus/cereal-words.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, external, importPackage, m, show } from '../../../src/index.ts'

export default () => {
  const game = external('game')
  return doc(m.lines(importPackage('@preview/cereal-words:0.1.0', [game]), show(game)))
}
