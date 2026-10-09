// Converted from test/suite/corpus/math-box-with-baseline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, inline, pt, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(box({ stroke: pt(0.2) }, unsafeRaw.math`a #box(baseline:0.5em, stroke: 0.2pt, $a$)`)))
}
