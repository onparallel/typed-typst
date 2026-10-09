// Converted from test/suite/corpus/ops-multiply-inf-with-length.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, em, float, inline, pt, space, times } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      times(float('inf'), pt(1)),
      space,
      times(float('inf'), em(1)),
      space,
      times(float('inf'), add(pt(1), em(1))),
    ),
  )
}
