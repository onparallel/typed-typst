// Converted from test/suite/corpus/bytes-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bytes, define, doc, inline, let_, m, path, read, repr, space, str, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dataDecl, data_2] = let_('data', read({ encoding: null }, path('/assets/images/rhino.png')))
  return doc(
    m.lines(
      dataDecl,
      inline(
        test(unsafeRaw.code<any>`data.len()`, 232243),
        space,
        test(unsafeRaw.code<any>`data.slice(0, count: 5)`, bytes([137, 80, 78, 71, 13])),
        space,
        test(str(unsafeRaw.code<any>`data.slice(1, 4)`), 'PNG'),
        space,
        test(repr(data_2), 'bytes(232243)'),
      ),
    ),
  )
}
