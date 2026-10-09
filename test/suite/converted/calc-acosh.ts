// Converted from test/suite/corpus/calc-acosh.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, assert, calc, define, doc, float, inline, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const t = define('t')
    .pos('a', T.any)
    .pos('b', T.any)
    .returns(T.any)
    .body((p) => assert(unsafeRaw.code<any>`calc.abs(a - b) < 1e-6`))
  return doc(
    m.lines(t.decl, inline(t(calc.acosh(1), float(0)), space, t(calc.acosh(2), calc.ln(add(2, calc.sqrt(3)))))),
  )
}
