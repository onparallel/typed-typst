// Converted from test/suite/corpus/read-text.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, path, read } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dataDecl, data_2] = let_('data', read(path('/assets/text/hello.txt')))
  return doc(m.lines(dataDecl, inline(test(data_2, 'Hello, world!\n'))))
}
