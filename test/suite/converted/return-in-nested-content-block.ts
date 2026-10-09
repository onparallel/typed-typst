// Converted from test/suite/corpus/return-in-nested-content-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, emph, inline, space, symbol, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const f = define('f')
    .pos('text', T.any)
    .named('caption', T.any, null)
    .returns(T.any)
    .body((p) =>
      codeBlock([
        p['text'],
        unsafeRaw.code<any>`if caption == none [\\.#return]`,
        inline`,${space}`,
        emph(p['caption']),
        inline(symbol('.')),
      ]),
    )
  return doc(
    f.decl,
    inline(f({ caption: inline`with caption` }, inline`My figure`)),
    inline(f(inline`My other figure`)),
  )
}
