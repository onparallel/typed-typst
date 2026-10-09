// Converted from test/suite/corpus/gradient-text-dir.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  auto,
  blue,
  btt,
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
        background: codeBlock(
          [],
          rect({ height: pct(100), width: pt(30), fill: gradient.linear({ dir: btt }, red, blue) }),
        ),
      }),
      set(par, { justify: true }),
      set(text, { fill: gradient.linear({ dir: btt }, red, blue) }),
      inline(lorem(30)),
    ),
  )
}
