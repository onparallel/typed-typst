// Converted from test/suite/corpus/place-block-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, bottom, doc, inline, page, place, pt, right, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: pt(60), paper: 'a8' }),
    'First',
    inline(place(add(bottom, right), inline`Placed`)),
    'Second',
  )
}
