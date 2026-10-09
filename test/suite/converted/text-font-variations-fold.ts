// Converted from test/suite/corpus/text-font-variations-fold.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, inline, m, set, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(text, { variations: { ital: 1, GRAD: 10 } }),
      set(text, { variations: { GRAD: 15 } }),
      inline(context((ctx) => test(unsafeRaw.code<any>`text.variations`, { ital: 1, GRAD: 15 }))),
    ),
  )
}
