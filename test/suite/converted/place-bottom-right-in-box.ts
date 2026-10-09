// Converted from test/suite/corpus/place-bottom-right-in-box.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, aqua, bottom, box, doc, inline, linebreak, place, right, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      box(
        { fill: aqua },
        inline`${space}${place(add(bottom, right), inline`Hi`)} Hello World ${linebreak()} How are ${linebreak()}
you?${space}`,
      ),
    ),
  )
}
