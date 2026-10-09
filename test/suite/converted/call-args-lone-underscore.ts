// Converted from test/suite/corpus/call-args-lone-underscore.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, data, define, doc, inline } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(
        data([1, 2, 3])
          .map((unused) => codeBlock([]))
          .len(),
        3,
      ),
    ),
  )
}
