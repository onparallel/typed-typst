// Converted from test/suite/corpus/smallcaps-all.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, smallcaps, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      smallcaps({ all: false }, inline`Test 012`),
      space,
      linebreak(),
      space,
      smallcaps({ all: true }, inline`Test 012`),
    ),
  )
}
