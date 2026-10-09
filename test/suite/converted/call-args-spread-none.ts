// Converted from test/suite/corpus/call-args-spread-none.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const f = define('f')
    .returns(T.any)
    .body((p) => null)
  return doc(
    m.lines(
      f.decl,
      inline(
        unsafeRaw.code<any>`f(..none)`,
        space,
        unsafeRaw.code<any>`f(..if false {})`,
        space,
        unsafeRaw.code<any>`f(..for x in () [])`,
      ),
    ),
  )
}
