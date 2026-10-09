// Converted from test/suite/corpus/for-loop-integrated.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, content, data, define, doc, inline, let_, m, space, type, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [outDecl, out] = let_('out', data([]))
  const [firstDecl, first] = let_('first', true)
  return doc(
    outDecl,
    inline(unsafeRaw.code<any>`for v in (1, 2, 3) {
  out += (v,)
}`),
    inline(unsafeRaw.code<any>`for (i, v) in ("1", "2", "3").enumerate() {
  test(repr(i + 1), v)
}`),
    inline(unsafeRaw.code<any>`for v in (a: 4, b: 5) {
  out += (v,)
}`),
    inline(unsafeRaw.code<any>`for (k, v) in (a: 6, b: 7) {
  out += (k,)
  out += (v,)
}`),
    inline(test(out, [1, 2, 3, ['a', 4], ['b', 5], 'a', 6, 'b', 7])),
    m.lines(
      firstDecl,
      unsafeRaw.markup`#let joined = for c in "abc👩‍👩‍👦‍👦" {
  if not first { ", " }
  first = false
  c
}`,
    ),
    inline(test(unsafeRaw.code<any>`joined`, 'a, b, c, 👩‍👩‍👦‍👦')),
    inline(
      test(unsafeRaw.code<any>`for v in "" []`, null),
      space,
      test(type(unsafeRaw.code<any>`for v in "1" []`), content),
    ),
  )
}
