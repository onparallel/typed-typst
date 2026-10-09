// Converted from test/suite/corpus/version-type.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, type, unsafeRaw, version } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(type(unsafeRaw.code<any>`sys.version`), version)))
}
