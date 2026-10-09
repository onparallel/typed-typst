// Converted from test/suite/corpus/toml.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, float, inline, let_, m, path, space, toml, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dataDecl, data_2] = let_('data', toml(path('/assets/data/toml-types.toml')))
  const [dataFromPathDecl, dataFromPath] = let_('data-from-path', toml(path('/assets/data/toml-types.toml')))
  return doc(
    m.lines(
      dataDecl,
      inline(
        test(unsafeRaw.code<any>`data.string`, 'wonderful'),
        space,
        test(unsafeRaw.code<any>`data.integer`, 42),
        space,
        test(unsafeRaw.code<any>`data.float`, 3.14),
        space,
        test(unsafeRaw.code<any>`data.boolean`, true),
        space,
        test(unsafeRaw.code<any>`data.array`, [1, 'string', float(3), false]),
        space,
        test(unsafeRaw.code<any>`data.inline_table`, { first: 'amazing', second: 'greater' }),
        space,
        test(unsafeRaw.code<any>`data.table.element`, 5),
        space,
        test(unsafeRaw.code<any>`data.table.others`, [false, 'indeed', 7]),
        space,
        test(
          unsafeRaw.code<any>`data.date_time`,
          datetime({ year: 2023, month: 2, day: 1, hour: 15, minute: 38, second: 57 }),
        ),
        space,
        test(
          unsafeRaw.code<any>`data.date_time2`,
          datetime({ year: 2023, month: 2, day: 1, hour: 15, minute: 38, second: 57 }),
        ),
        space,
        test(unsafeRaw.code<any>`data.date`, datetime({ year: 2023, month: 2, day: 1 })),
        space,
        test(unsafeRaw.code<any>`data.time`, datetime({ hour: 15, minute: 38, second: 57 })),
      ),
    ),
    m.lines(dataFromPathDecl, inline(test(dataFromPath, data_2))),
  )
}
