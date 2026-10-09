// Converted from test/suite/corpus/figure-par.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, highlight, inline, par, show } from '../../../src/index.ts'

export default () => {
  return doc(
    show(par, highlight),
    inline(figure(inline`Text`)),
    inline(figure({ caption: inline`A caption` }, inline`Text`)),
  )
}
