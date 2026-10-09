// Converted from test/suite/corpus/params-sink-unnamed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(unsafeRaw.markup`#let f(.., a) = a`, inline(test(unsafeRaw.code<any>`f(1, 2, 3)`, 3))),
    m.lines(unsafeRaw.markup`#let f(..) = 2`, inline(test(unsafeRaw.code<any>`f(arg: 1)`, 2))),
  )
}
