// Converted from test/suite/corpus/yaml.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, dict, doc, inline, let_, m, path, space, unsafeRaw, yaml } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dataDecl, data_2] = let_('data', yaml(path('/assets/data/yaml-types.yaml')))
  const [dataFromPathDecl, dataFromPath] = let_('data-from-path', yaml(path('/assets/data/yaml-types.yaml')))
  return doc(
    m.lines(
      dataDecl,
      inline(
        test(unsafeRaw.code<any>`data.len()`, 9),
        space,
        test(unsafeRaw.code<any>`data.null_key`, [null, null]),
        space,
        test(unsafeRaw.code<any>`data.string`, 'text'),
        space,
        test(unsafeRaw.code<any>`data.integer`, 5),
        space,
        test(unsafeRaw.code<any>`data.float`, 1.12),
        space,
        test(unsafeRaw.code<any>`data.mapping`, dict({ '1': 'one', '2': 'two' })),
        space,
        test(unsafeRaw.code<any>`data.seq`, [1, 2, 3, 4]),
        space,
        test(unsafeRaw.code<any>`data.bool`, false),
        space,
        test(unsafeRaw.code<any>`data.keys().contains("true")`, true),
        space,
        test(unsafeRaw.code<any>`data.at("1")`, 'ok'),
      ),
    ),
    m.lines(dataFromPathDecl, inline(test(dataFromPath, data_2))),
  )
}
