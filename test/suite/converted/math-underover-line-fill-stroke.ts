// Converted from test/suite/corpus/math-underover-line-fill-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, inline, pt, red, space, text, unsafeRaw, yellow } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      text(
        { size: pt(20), fill: yellow, stroke: add(red, pt(0.5)) },
        inline(unsafeRaw.math`underline(Delta).overline(Delta)`),
      ),
      space,
      text({ size: pt(25), stroke: red }, inline(unsafeRaw.math`underline(Delta).overline(Delta)`)),
    ),
  )
}
