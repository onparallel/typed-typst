// Converted from test/suite/corpus/query-here.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, inline, query, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      context((ctx) =>
        test(unsafeRaw.code<any>`query(here()).first().func()`, unsafeRaw.code<any>`(context none).func()`),
      ),
    ),
  )
}
