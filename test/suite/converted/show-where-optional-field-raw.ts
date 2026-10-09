// Converted from test/suite/corpus/show-where-optional-field-raw.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, inline, luma, pt, raw, show, where } from '../../../src/index.ts'

export default () => {
  return doc(
    show(
      where(raw, { block: false }),
      box.with({ fill: luma(220), inset: { x: pt(3), y: pt(0) }, outset: { y: pt(3) }, radius: pt(2) }),
    ),
    inline`This is ${raw('fn main() {}')} some text.`,
  )
}
