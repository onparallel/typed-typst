// Converted from test/suite/corpus/underline-overline-strike.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, overline, pt, rgb, strike, text, underline } from '../../../src/index.ts'

export default () => {
  const [redDecl, red_2] = let_('red', rgb('fc0030'))
  return doc(
    redDecl,
    inline(strike(inline`Statements dreamt up by the utterly deranged.`)),
    inline(underline({ offset: pt(5) }, inline`Further below.`)),
    inline(underline({ stroke: red_2, evade: false }, inline`Critical information is conveyed here.`)),
    inline(text({ fill: red_2 }, underline(inline`Change with the wind.`))),
    inline(overline(underline(inline`Running amongst the wolves.`))),
  )
}
