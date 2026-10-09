// Converted from test/suite/corpus/get-rule-in-function.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, inline, m, set, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const translate = define('translate')
    .rest('args', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`args.named().at(text.lang)`)
  return doc(
    m.lines(
      translate.decl,
      set(text, { lang: 'de' }),
      inline(context((ctx) => test(translate({ de: 'Inhalt', en: 'Contents' }), 'Inhalt'))),
    ),
  )
}
