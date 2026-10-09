// Converted from test/suite/corpus/show-text-within-par.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, highlight, inline, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show("Pythagoras'", highlight), inline`${unsafeRaw.math`a^2 + b^2 = c^2`} is Pythagoras' theorem.`),
  )
}
