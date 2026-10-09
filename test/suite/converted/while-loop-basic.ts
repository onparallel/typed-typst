// Converted from test/suite/corpus/while-loop-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [iDecl, i] = let_('i', 0)
  const [iterDecl, iter] = let_('iter', true)
  return doc(
    m.lines(
      iDecl,
      inline(unsafeRaw.code<any>`while i < 10 [
  #(i += 2)
  #i
]`),
    ),
    m.lines(
      iterDecl,
      inline(unsafeRaw.code<any>`while iter {
  iter = false
  "Hi."
}`),
    ),
    inline(unsafeRaw.code<any>`while false {
  dont-care
}`),
  )
}
