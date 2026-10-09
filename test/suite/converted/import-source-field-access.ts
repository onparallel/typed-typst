// Converted from test/suite/corpus/import-source-field-access.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, enum_, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [dDecl, d] = let_('d', { e: enum_ })
  return doc(
    m.lines(
      dDecl,
      unsafeRaw.markup`#import d.e`,
      unsafeRaw.markup`#import d.e as renamed`,
      unsafeRaw.markup`#import d.e: item`,
      inline(unsafeRaw.code<any>`item(2)[a]`),
    ),
  )
}
