// Converted from test/suite/corpus/place-float-delta.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, bottom, center, doc, inline, place, pt, rect, top } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`${place({ float: true, dx: pt(10) }, add(top, center), rect(inline`I`))} A ${place({ float: true, dx: pt(-10) }, add(bottom, center), rect(inline`II`))}`,
  )
}
