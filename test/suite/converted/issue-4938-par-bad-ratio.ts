// Converted from test/suite/corpus/issue-4938-par-bad-ratio.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, inline, m, par, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(par, { justify: true }), inline(box(unsafeRaw.math`k in NN_0`))))
}
