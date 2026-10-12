// Converted from test/suite/corpus/csv.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  add,
  auto,
  csv,
  define,
  doc,
  inline,
  let_,
  m,
  page,
  path,
  set,
  spread,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dataDecl, data_2] = let_('data', csv(path('/assets/data/zoo.csv')))
  const [dataFromPathDecl, dataFromPath] = let_('data-from-path', csv(path('/assets/data/zoo.csv')))
  return doc(
    m.lines(
      set(page, { width: auto }),
      dataDecl,
      let_('cells', unsafeRaw.code<any>`data.at(0).map(strong) + data.slice(1).flatten()`)[0],
      inline(table({ columns: unsafeRaw.code<any>`data.at(0).len()` }, spread(unsafeRaw.code<any>`cells`))),
    ),
    m.lines(dataFromPathDecl, inline(test(dataFromPath, data_2))),
  )
}
