// Converted from test/suite/corpus/logical-children-tags-hide-around-place.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, bottom, doc, hide, inline, place, right, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(hide(inline`${space}Some text ${place({ float: true }, add(bottom, right), inline`explanation`)}.${space}`)),
    'Some other text.',
  )
}
