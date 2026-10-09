// Converted from test/suite/corpus/math-spacing-weak-script.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`a #h(0.9em, weak: true) sscript(#h(1em, weak: true)) b`,
      space,
      linebreak(),
      space,
      unsafeRaw.math`a #h(0.9em) b`,
    ),
  )
}
