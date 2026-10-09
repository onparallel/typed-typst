// Converted from test/suite/corpus/string-matches.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const timesum = define('timesum')
    .pos('text', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  let time = 0
  for match in text.matches(regex("(\\\\d+):(\\\\d+)")) {
    let caps = match.captures
    time += 60 * int(caps.at(0)) + int(caps.at(1))
  }
  str(int(time / 60)) + ":" + str(calc.rem(time, 60))
}`,
    )
  return doc(
    inline(
      test(data('Hello there').matches('\\d'), []),
      space,
      test(data('Day by Day.').matches('Day'), [
        { start: 0, end: 3, text: 'Day', captures: [] },
        { start: 7, end: 10, text: 'Day', captures: [] },
      ]),
    ),
    timesum.decl,
    inline(
      test(timesum(''), '0:0'),
      space,
      test(timesum('2:70'), '3:10'),
      space,
      test(timesum('1:20, 2:10, 0:40'), '4:10'),
    ),
  )
}
