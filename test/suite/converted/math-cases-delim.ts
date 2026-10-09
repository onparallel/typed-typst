// Converted from test/suite/corpus/math-cases-delim.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, sym, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(math.cases, { delim: sym.chevron.l }), inline(unsafeRaw.math.block`cases(a, b, c)`)))
}
