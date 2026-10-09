// Converted from test/suite/corpus/string-at-at-default-other-type.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(data('Hello').at({ default: { a: 10 } }, 5), { a: 10 })))
}
