// Converted from test/suite/corpus/issue-3275-placeholder.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.code<any>`for _ in (1, 2) {}`,
      space,
      unsafeRaw.code<any>`for _ in (a: 1, b: 2) {}`,
      space,
      unsafeRaw.code<any>`for _ in "foo" {}`,
      space,
      unsafeRaw.code<any>`for _ in bytes("😊") {}`,
    ),
  )
}
