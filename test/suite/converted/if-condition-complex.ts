// Converted from test/suite/corpus/if-condition-complex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [iDecl, i] = let_('i', 3)
  return doc(
    inline(unsafeRaw.code<any>`if {true} [
  One.
]`),
    inline(unsafeRaw.code<any>`if [] != none [
  Two.
]`),
    inline(unsafeRaw.code<any>`if (
  1 + 1
    == 1
) [
  Nope.
] else {
  "Three."
}`),
    inline(unsafeRaw.code<any>`if false [
  Bad.
] else {
  let point = "."
  "Four" + point
}`),
    inline(
      codeBlock([
        unsafeRaw.code<any>`if content == type[b] [Fi] else [Nope]`,
        unsafeRaw.code<any>`if content == type [Nope] else [ve.]`,
      ]),
    ),
    m.lines(
      iDecl,
      inline(unsafeRaw.code<any>`if i < 2 [
  Five.
] else if i < 4 [
  Six.
] else [
  Seven.
]`),
    ),
  )
}
