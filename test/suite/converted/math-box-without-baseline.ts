// Converted from test/suite/corpus/math-box-without-baseline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, codeBlock, doc, h, inline, pt, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      codeBlock([
        box({ stroke: pt(0.2) }, unsafeRaw.math`a #box(stroke: 0.2pt, $a$)`),
        h(pt(12)),
        box({ stroke: pt(0.2) }, unsafeRaw.math`a #box(stroke: 0.2pt, $g$)`),
        h(pt(12)),
        box({ stroke: pt(0.2) }, unsafeRaw.math`g #box(stroke: 0.2pt, $g$)`),
      ]),
    ),
  )
}
