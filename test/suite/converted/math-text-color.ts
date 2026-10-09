// Converted from test/suite/corpus/math-text-color.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math`text(#red, "time"^2) + sqrt("place")`))
}
