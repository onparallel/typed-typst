// Converted from test/suite/corpus/math-cancel-angle-func.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`x + cancel(y, angle: #{angle => angle + 90deg}) - cancel(z, angle: #(angle => angle + 135deg))`,
      space,
      unsafeRaw.math.block`e + cancel((j + e)/(f + e)) - cancel((j + e)/(f + e), angle: #(angle => angle + 30deg))`,
    ),
  )
}
