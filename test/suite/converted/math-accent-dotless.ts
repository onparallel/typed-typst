// Converted from test/suite/corpus/math-accent-dotless.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test')
    .pos('c', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.math`grave(#c), acute(sans(#c)), hat(frak(#c)), tilde(mono(#c)),
  macron(bb(#c)), dot(cal(#c)), diaer(upright(#c)), breve(bold(#c)),
  circle(bold(upright(#c))), caron(upright(sans(#c))), arrow(bold(frak(#c)))`,
    )
  return doc(m.lines(test.decl, inline(unsafeRaw.math`test(i) \\ test(j)`)))
}
