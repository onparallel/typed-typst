// Converted from test/suite/corpus/for-loop-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const f1 = define('f1')
    .rest('args', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`args.pos().map(repr)`)
  const f2 = define('f2')
    .rest('args', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`args.named().pairs().map(p => repr(p.first()) + ": " + repr(p.last()))`)
  const f = define('f')
    .rest('args', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`(f1(..args) + f2(..args)).join(", ")`)
  return doc(
    inline(unsafeRaw.code<any>`for x in () [Nope]`),
    inline(unsafeRaw.code<any>`for (k, v) in (Name: "Typst", Age: 2) [
  #k: #v.
]`),
    inline(
      codeBlock([
        '[',
        unsafeRaw.code<any>`for v in (1, 2, 3, 4) {
    if v > 1 [, ]
    [#v]
    if v == 1 [st]
    if v == 2 [nd]
    if v == 3 [rd]
    if v >= 4 [th]
   }`,
        ']',
      ]),
    ),
    inline(unsafeRaw.code<any>`for v in (1, 2, 3, 4, 5, 6, 7) [#if v >= 2 and v <= 5 { repr(v) }]`),
    m.lines(f1.decl, f2.decl, f.decl, inline(f({ a: 2 }, 1))),
  )
}
