// Converted from test/suite/corpus/circle-relative-sizing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  center,
  circle,
  doc,
  eastern,
  fr,
  horizon,
  inline,
  ltr,
  m,
  pct,
  pt,
  rect,
  rgb,
  set,
  show,
  stack,
  text,
  white,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { fill: white }),
      show(rect.with({ width: pt(100), height: pt(50), inset: pt(0), fill: rgb('aaa') })),
      set(align, { alignment: add(center, horizon) }),
      inline(
        stack(
          { dir: ltr, spacing: fr(1) },
          fr(1),
          circle({ radius: pt(10), fill: eastern }, inline`A`),
          circle({ height: pct(60), fill: eastern }, inline`B`),
          circle({ width: add(pct(20), pt(20)), fill: eastern }, inline`C`),
          fr(1),
        ),
      ),
    ),
  )
}
