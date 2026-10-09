// Converted from test/suite/corpus/costs-access.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, inline, m, pct, set, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(text, { costs: { hyphenation: pct(1), runt: pct(2) } }),
      set(text, { costs: { widow: pct(3) } }),
      inline(
        context((ctx) =>
          test(unsafeRaw.code<any>`text.costs`, { hyphenation: pct(1), runt: pct(2), widow: pct(3), orphan: pct(100) }),
        ),
      ),
    ),
  )
}
