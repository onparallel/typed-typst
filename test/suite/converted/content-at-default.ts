// Converted from test/suite/corpus/content-at-default.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, auto, define, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(auto, unsafeRaw.code<any>`[a].at("doesn't exist", default: auto)`)))
}
