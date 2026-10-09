// Converted from test/suite/corpus/issue-2902-gradient-oklch-panic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  auto,
  block,
  cm,
  doc,
  em,
  gradient,
  inline,
  m,
  oklch,
  page,
  pct,
  pt,
  purple,
  red,
  set,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: cm(15), height: auto, margin: em(1) }),
      set(block, { width: pct(100), height: cm(1), above: pt(2) }),
    ),
    inline(
      block({ fill: gradient.linear({ space: oklch }, red, purple) }),
      space,
      block({ fill: unsafeRaw.code<any>`gradient.linear(..color.map.rainbow, space: oklch)` }),
      space,
      block({ fill: unsafeRaw.code<any>`gradient.linear(..color.map.plasma, space: oklch)` }),
    ),
  )
}
