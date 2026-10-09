// Converted from test/suite/corpus/destructuring-let-dict-with-sink-at-end-empty.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(m.lines(unsafeRaw.markup`#let (a: _, ..b) = (a: 1)`, inline(test(unsafeRaw.code<any>`b`, data({})))))
}
