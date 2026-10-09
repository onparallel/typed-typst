// Converted from test/suite/corpus/csv-row-type-dict.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, csv, define, dictionary, doc, inline, let_, m, path, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dataDecl, data_2] = let_('data', csv({ rowType: dictionary }, path('/assets/data/zoo.csv')))
  return doc(
    m.lines(
      dataDecl,
      inline(
        test(data_2.len(), 3),
        space,
        test(unsafeRaw.code<any>`data.at(0).Name`, 'Debby'),
        space,
        test(unsafeRaw.code<any>`data.at(2).Weight`, '150kg'),
        space,
        test(unsafeRaw.code<any>`data.at(1).Species`, 'Tiger'),
      ),
    ),
  )
}
