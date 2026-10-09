// Converted from test/suite/corpus/math-call-non-func-empty-args.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`sin(,x,y,,,)`, space, unsafeRaw.math.block`sin( ,/**/x/**/, , /**/y, ,/**/, )`),
  )
}
