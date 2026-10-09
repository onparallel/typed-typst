// Converted from test/suite/corpus/par-spacing-context.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, inline, m, par, pt, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(set(par, { spacing: pt(10) }), inline(context((ctx) => test(unsafeRaw.code<any>`par.spacing`, pt(10))))),
  )
}
