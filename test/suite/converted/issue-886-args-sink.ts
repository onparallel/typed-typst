// Converted from test/suite/corpus/issue-886-args-sink.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, repr, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const foo = define('foo')
    .rest('body', T.any)
    .returns(T.any)
    .body((p) => repr(unsafeRaw.code<any>`body.pos()`))
  return doc(m.lines(foo.decl, inline(foo({ a: '1', b: '2' }, 1, 2, 3, 4, 5, 6))))
}
