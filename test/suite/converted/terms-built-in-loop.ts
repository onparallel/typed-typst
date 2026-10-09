// Converted from test/suite/corpus/terms-built-in-loop.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`for word in lorem(4).split().map(s => s.trim(".")) [
  / #word: Latin stuff.
]`),
  )
}
