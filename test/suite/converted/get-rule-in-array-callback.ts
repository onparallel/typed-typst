// Converted from test/suite/corpus/get-rule-in-array-callback.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, data, define, doc, inline, m, set, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(text, { lang: 'de' }),
      inline(
        context((ctx) =>
          test(data(['en', 'de', 'fr']).sorted({ key: unsafeRaw.code<any>`v => v != text.lang` }), ['de', 'en', 'fr']),
        ),
      ),
    ),
  )
}
