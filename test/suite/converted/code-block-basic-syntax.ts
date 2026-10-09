// Converted from test/suite/corpus/code-block-basic-syntax.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, codeBlock, data, doc, inline, let_, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [partsDecl, parts] = let_('parts', data(['my fri', 'end.']))
  return doc(
    inline(codeBlock([partsDecl, inline`Hello,${space}`, unsafeRaw.code<any>`for s in parts [#s]`])),
    inline(
      codeBlock([
        inline`How`,
        unsafeRaw.code<any>`if true {
    " are"
  }`,
        inline(space),
        unsafeRaw.code<any>`if false [Nope]`,
        add(inline`you`, '?'),
      ]),
    ),
  )
}
