// Converted from test/suite/corpus/issue-5014-show-text-tags.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, counter, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [cDecl, c] = let_('c', counter('c'))
  return doc(
    inline(unsafeRaw.code<any>`{
  let c = counter("c")
  show "b": context c.get().first()
  [a]
  c.step()
  [bc]
}`),
  )
}
