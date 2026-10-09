// Converted from test/suite/corpus/transform-rotate.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, aqua, box, define, doc, inline, m, page, pt, rotate, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const one = define('one')
    .pos('angle', T.any)
    .returns(T.any)
    .body((p) => box({ fill: aqua }, rotate(p['angle'], inline`Test Text`)))
  return doc(
    m.lines(set(page, { width: pt(200) }), set(rotate, { reflow: true })),
    m.lines(
      one.decl,
      inline(unsafeRaw.code<any>`for angle in range(0, 360, step: 15) {
  one(angle * 1deg)
}`),
    ),
  )
}
