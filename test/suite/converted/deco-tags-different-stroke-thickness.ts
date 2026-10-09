// Converted from test/suite/corpus/deco-tags-different-stroke-thickness.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, pt, show, underline } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(underline.with({ stroke: pt(2) })),
      inline`thick underlined ${show(underline.with({ stroke: pt(1) }))} thin underlined`,
    ),
  )
}
