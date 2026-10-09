// Converted from test/suite/corpus/import-from-function-scope-nested-import.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, grid, inline, m, space, table, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      unsafeRaw.markup`#import std: grid.cell, table.cell as tcell`,
      inline(test(unsafeRaw.code<any>`cell`, grid.cell), space, test(unsafeRaw.code<any>`tcell`, table.cell)),
    ),
  )
}
