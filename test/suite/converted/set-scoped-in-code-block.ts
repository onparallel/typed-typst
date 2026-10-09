// Converted from test/suite/corpus/set-scoped-in-code-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      codeBlock([
        unsafeRaw.code<any>`if true {
    set text(blue)
    [Blue ]
  }`,
        inline`Not blue`,
      ]),
    ),
  )
}
