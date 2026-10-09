// Converted from test/suite/corpus/issue-5117-query-order-place.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  block,
  codeBlock,
  context,
  define,
  doc,
  fr,
  inline,
  metadata,
  place,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const t = define('t')
    .pos('expected', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`context {
  let elems = query(selector(metadata).after(here()))
  let val = elems.first().value
  test(val, expected)
}`,
    )
  return doc(
    t.decl,
    inline(codeBlock([t('a'), place(metadata('a'))])),
    inline(codeBlock([t('b'), block({ height: fr(1) }, metadata('b'))])),
  )
}
