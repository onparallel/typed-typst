// Converted from test/suite/corpus/content-fields.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, space, strong, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`[a].fields()`, { text: 'a' }),
      space,
      test(unsafeRaw.code<any>`[a *b*].fields()`, { children: [inline`a`, inline(space), strong(inline`b`)] }),
    ),
  )
}
