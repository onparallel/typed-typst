// Converted from test/suite/corpus/get-rule-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, inline, set, space, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      context((ctx) => test(unsafeRaw.code<any>`text.lang`, 'en')),
      space,
      set(text, { lang: 'de' }),
      space,
      context((ctx_2) => test(unsafeRaw.code<any>`text.lang`, 'de')),
      space,
      text(
        { lang: 'es' },
        context((ctx_3) => test(unsafeRaw.code<any>`text.lang`, 'es')),
      ),
    ),
  )
}
