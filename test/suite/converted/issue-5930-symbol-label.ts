// Converted from test/suite/corpus/issue-5930-symbol-label.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, emoji, inline, label, labelled, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      labelled(emoji.face, label('lab')),
      space,
      context((ctx) => test(unsafeRaw.code<any>`query(<lab>).first().text`, '😀')),
    ),
  )
}
