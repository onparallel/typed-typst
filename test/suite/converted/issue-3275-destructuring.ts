// Converted from test/suite/corpus/issue-3275-destructuring.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.code<any>`for (a,b,c) in (("a", 1, bytes(())), ("b", 2, bytes(""))) {}`,
      space,
      unsafeRaw.code<any>`for (a, ..) in (("a", 1, bytes(())), ("b", 2, bytes(""))) {}`,
      space,
      unsafeRaw.code<any>`for (k, v)  in (a: 1, b: 2, c: 3) {}`,
      space,
      unsafeRaw.code<any>`for (.., v) in (a: 1, b: 2, c: 3) {}`,
    ),
  )
}
