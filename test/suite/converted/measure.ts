// Converted from test/suite/corpus/measure.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, inline, m, pt, space, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const f = define('f')
    .pos('lo', T.any)
    .pos('hi', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`context {
  let h = measure[Hello].height
  assert(h > lo)
  assert(h < hi)
}`,
    )
  return doc(
    m.lines(f.decl, inline(text({ size: pt(10) }, f(pt(6), pt(8))), space, text({ size: pt(20) }, f(pt(13), pt(14))))),
  )
}
