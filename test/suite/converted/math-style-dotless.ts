// Converted from test/suite/corpus/math-style-dotless.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`dotless.i dotless.j,
  upright(dotless.i) upright(dotless.j),
  sans(dotless.i) sans(dotless.j),
  bold(dotless.i) bold(dotless.j),
  bb(dotless.i) bb(dotless.j),
  cal(dotless.i) cal(dotless.j),
  frak(dotless.i) frak(dotless.j),
  mono(dotless.i) mono(dotless.j),
  bold(frak(dotless.i)) upright(sans(dotless.j)),
  italic(bb(dotless.i)) frak(sans(dotless.j))`),
  )
}
