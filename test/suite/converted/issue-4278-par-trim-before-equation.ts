// Converted from test/suite/corpus/issue-4278-par-trim-before-equation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, lorem, m, par, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(par, { justify: true }), inline`${lorem(6)} aa ${unsafeRaw.math`a = c + b`}`))
}
