// Converted from test/suite/corpus/gradient-text-global.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  auto,
  blue,
  codeBlock,
  doc,
  gradient,
  inline,
  lorem,
  m,
  page,
  par,
  pct,
  pt,
  rect,
  red,
  set,
  text,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, {
        width: pt(200),
        height: auto,
        margin: pt(10),
        background: codeBlock([], rect({ width: pct(100), height: pt(30), fill: gradient.linear(red, blue) })),
      }),
      set(par, { justify: true }),
      set(text, { fill: gradient.linear(red, blue) }),
      inline(lorem(30)),
    ),
  )
}
