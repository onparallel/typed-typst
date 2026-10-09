// Converted from test/suite/corpus/math-call-spread-shorthand-clash.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const func = define('func')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) => p['body'])
  return doc(m.lines(func.decl, inline(unsafeRaw.math`func(...)`)))
}
