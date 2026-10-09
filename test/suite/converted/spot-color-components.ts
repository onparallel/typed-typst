// Converted from test/suite/corpus/spot-color-components.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, color, define, doc, eastern, inline, let_, m, pct, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [pantoneDecl, pantone] = let_('pantone', color.spot('PANTONE 2221 C', eastern))
  return doc(
    m.lines(
      pantoneDecl,
      unsafeRaw.markup`#let tinted = pantone.tint(80%)`,
      inline(
        test(unsafeRaw.code<any>`tinted.components()`, [pct(80)]),
        space,
        test(unsafeRaw.code<any>`tinted.components(alpha: false)`, [pct(80)]),
      ),
    ),
  )
}
