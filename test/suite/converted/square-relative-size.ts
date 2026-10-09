// Converted from test/suite/corpus/square-relative-size.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  bottom,
  call,
  center,
  doc,
  fr,
  horizon,
  inline,
  let_,
  ltr,
  m,
  page,
  pct,
  pt,
  set,
  square,
  stack,
} from '../../../src/index.ts'

export default () => {
  const [centeredDecl, centered] = let_('centered', align.with(add(center, horizon)))
  return doc(
    m.lines(
      set(page, { width: pt(120), height: pt(70) }),
      set(align, { alignment: bottom }),
      centeredDecl,
      inline(
        stack(
          { dir: ltr, spacing: fr(1) },
          square({ width: pct(50) }, call(centered, inline`A`)),
          square({ height: pct(50) }),
          stack(square({ size: pt(10) }), square({ size: pt(20) }, call(centered, inline`B`))),
        ),
      ),
    ),
  )
}
