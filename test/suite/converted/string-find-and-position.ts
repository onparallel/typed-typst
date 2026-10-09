// Converted from test/suite/corpus/string-find-and-position.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, let_, m, regex, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dateDecl, date] = let_('date', regex('\\d{2}:\\d{2}'))
  return doc(
    m.lines(
      dateDecl,
      inline(
        test(data('Hello World').find('World'), 'World'),
        space,
        test(data('Hello World').position('World'), 6),
        space,
        test(data("It's 12:13 now").find(date), '12:13'),
        space,
        test(data("It's 12:13 now").position(date), 5),
      ),
    ),
  )
}
