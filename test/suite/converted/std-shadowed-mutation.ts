// Converted from test/suite/corpus/std-shadowed-mutation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      unsafeRaw.markup`#let std = 10`,
      inline(unsafeRaw.code<any>`(std = 7)`, space, test(unsafeRaw.code<any>`std`, 7)),
    ),
  )
}
