// Converted from test/suite/corpus/calc-atanh.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, assert, calc, define, doc, float, inline, m, space, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const t = define('t')
    .pos('a', T.any)
    .pos('b', T.any)
    .returns(T.any)
    .body((p) => assert(unsafeRaw.code<any>`calc.abs(a - b) < 1e-6`))
  return doc(m.lines(t.decl, inline(t(calc.atanh(0), float(0)), space, t(calc.atanh(0.5), times(0.5, calc.ln(3))))))
}
