// Converted from test/suite/corpus/gradient-spot-color-to-process.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  block,
  blue,
  color,
  doc,
  gradient,
  inline,
  let_,
  m,
  page,
  pct,
  pt,
  rgb,
  set,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [pantoneDecl, pantone] = let_('pantone', color.spot('PANTONE 185 C', rgb(pct(89.4), pct(0.7), pct(17))))
  return doc(
    m.lines(
      pantoneDecl,
      set(page, { width: pt(100), height: pt(30), margin: pt(0) }),
      inline(
        block({
          width: pct(100),
          height: pct(100),
          fill: gradient.linear({ space: rgb }, unsafeRaw.code<any>`pantone.tint(80%)`, blue),
        }),
      ),
    ),
  )
}
