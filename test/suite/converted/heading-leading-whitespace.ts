// Converted from test/suite/corpus/heading-leading-whitespace.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, define, doc, inline, m, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  return doc(
    inline(
      test(blocks(m.heading(1, 'h')), blocks(m.heading(1, 'h'))),
      space,
      test(blocks(m.heading(1, 'h')), blocks(m.heading(1, 'h'))),
      space,
      test(blocks(m.heading(1, 'h')), blocks(m.heading(1, 'h'))),
    ),
  )
}
