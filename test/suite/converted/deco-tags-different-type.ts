// Converted from test/suite/corpus/deco-tags-different-type.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, overline, space, strike, underline } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      underline(inline`underlined`),
      linebreak(),
      space,
      overline(inline`overlined`),
      linebreak(),
      space,
      strike(inline`striked`),
      linebreak(),
    ),
  )
}
