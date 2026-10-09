// Converted from test/suite/corpus/gradient-spot-color-same-colorant.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  block,
  color,
  define,
  doc,
  eastern,
  gradient,
  inline,
  let_,
  m,
  page,
  pct,
  pt,
  set,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [pantoneDecl, pantone] = let_('pantone', color.spot('PANTONE 2221 C', eastern))
  const [gDecl, g] = let_(
    'g',
    gradient.linear(
      { space: pantone },
      unsafeRaw.code<any>`pantone.tint(20%)`,
      unsafeRaw.code<any>`pantone.tint(100%)`,
    ),
  )
  return doc(
    m.lines(
      pantoneDecl,
      set(page, { width: pt(100), height: pt(30), margin: pt(0) }),
      gDecl,
      inline(test(g.sample(pct(10)).space(), pantone), space, block({ width: pct(100), height: pct(100), fill: g })),
    ),
  )
}
