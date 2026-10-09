// Converted from test/suite/corpus/cbor-encode-bytes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bytes, cbor, define, doc, inline, let_, m } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [valueDecl, value] = let_('value', bytes('Typst'))
  return doc(m.lines(valueDecl, inline(test(cbor(cbor.encode(value)), value))))
}
