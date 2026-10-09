// Converted from test/suite/corpus/string-first-and-last.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data('Hello').first(), 'H'),
      space,
      test(data('Hello').last(), 'o'),
      space,
      test(data('🏳️‍🌈A🏳️‍⚧️').first(), '🏳️‍🌈'),
      space,
      test(data('🏳️‍🌈A🏳️‍⚧️').last(), '🏳️‍⚧️'),
      space,
      test(data('hey').first({ default: 'd' }), 'h'),
      space,
      test(data('').first({ default: 'd' }), 'd'),
      space,
      test(data('hey').last({ default: 'd' }), 'y'),
      space,
      test(data('').last({ default: 'd' }), 'd'),
    ),
  )
}
