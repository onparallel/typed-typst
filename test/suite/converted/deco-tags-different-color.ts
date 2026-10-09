// Converted from test/suite/corpus/deco-tags-different-color.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, inline, m, red, show, underline } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(underline.with({ stroke: red })),
      inline`red underlined text ${show(underline.with({ stroke: blue }))} blue underlined text`,
    ),
  )
}
