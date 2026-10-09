// Converted from test/suite/corpus/params-sink-named.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, m } from '../../../src/index.ts'

export default () => {
  const f = define('f')
    .rest('x', T.any)
    .returns(T.any)
    .body((p) => codeBlock([]))
  return doc(m.lines(f.decl, inline(f({ arg: 1 }))))
}
