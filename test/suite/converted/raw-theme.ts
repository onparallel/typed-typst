// Converted from test/suite/corpus/raw-theme.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  codeBlock,
  doc,
  inline,
  luma,
  m,
  page,
  path,
  pct,
  place,
  pt,
  raw,
  rect,
  rgb,
  right,
  set,
  show,
  text,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(180) }),
      set(text, { size: pt(6) }),
      set(raw, { theme: path('/assets/themes/halcyon.tmTheme') }),
      show(raw, (it, ctx) =>
        codeBlock(
          [set(text, { fill: rgb('a2aabc') })],
          rect(
            { width: pct(100), inset: { x: pt(4), y: pt(5) }, radius: pt(4), fill: rgb('1d2433') },
            add(place(right, text({ fill: luma(240) }, it.lang)), it),
          ),
        ),
      ),
    ),
    inline(
      raw({ block: true, lang: 'typ' }, '= Chapter 1\n#lorem(100)\n\n#let hi = "Hello World"\n#show heading: emph'),
    ),
  )
}
