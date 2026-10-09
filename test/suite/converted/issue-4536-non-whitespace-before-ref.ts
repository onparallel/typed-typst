// Converted from test/suite/corpus/issue-4536-non-whitespace-before-ref.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, figure, inline, label, labelled, ref, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  return doc(
    inline(
      labelled([figure(inline()), space], label('1')),
      space,
      test(inline`(${ref(label('1'))})`, inline`(${ref(label('1'))})`),
    ),
  )
}
