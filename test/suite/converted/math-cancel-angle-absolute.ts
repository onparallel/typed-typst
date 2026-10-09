// Converted from test/suite/corpus/math-cancel-angle-absolute.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`cancel(x, angle: #0deg) + cancel(x, angle: #45deg) + cancel(x, angle: #90deg) + cancel(x, angle: #135deg)`,
    ),
  )
}
