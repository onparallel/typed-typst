// Converted from test/suite/corpus/json.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, json, let_, m, path, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dataDecl, data_2] = let_('data', json(path('/assets/data/zoo.json')))
  const [dataFromPathDecl, dataFromPath] = let_('data-from-path', json(path('/assets/data/zoo.json')))
  return doc(
    m.lines(
      dataDecl,
      inline(
        test(unsafeRaw.code<any>`data.len()`, 3),
        space,
        test(unsafeRaw.code<any>`data.at(0).name`, 'Debby'),
        space,
        test(unsafeRaw.code<any>`data.at(2).weight`, 150),
      ),
    ),
    m.lines(dataFromPathDecl, inline(test(dataFromPath, data_2))),
  )
}
