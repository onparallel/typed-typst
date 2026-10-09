// Converted from test/suite/corpus/math-style-hebrew-exceptions.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`aleph, beth, gimel, daleth`,
      space,
      linebreak(),
      space,
      unsafeRaw.math`upright(aleph), upright(beth), upright(gimel), upright(daleth)`,
    ),
  )
}
