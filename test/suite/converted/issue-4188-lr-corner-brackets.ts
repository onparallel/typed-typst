// Converted from test/suite/corpus/issue-4188-lr-corner-brackets.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`${unsafeRaw.math`⌜a⌟⌞b⌝`} = ${unsafeRaw.math`⌜`}${unsafeRaw.math`a`}${unsafeRaw.math`⌟`}${unsafeRaw.math`⌞`}${unsafeRaw.math`b`}${unsafeRaw.math`⌝`}`,
  )
}
