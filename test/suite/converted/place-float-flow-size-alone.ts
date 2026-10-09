// Converted from test/suite/corpus/place-float-flow-size-alone.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, page, place, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto, height: auto }),
      set(place, { float: true, clearance: pt(5) }),
      inline(place(auto, inline`A`)),
    ),
  )
}
