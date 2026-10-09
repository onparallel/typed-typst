// Converted from test/suite/corpus/math-linebreaking-in-box.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, box, define, doc, inline, line, m, pt, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const hrule = define('hrule')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => box(line({ length: p['x'] })))
  return doc(m.lines(hrule.decl, inline(hrule(pt(80)), box(unsafeRaw.math`a+b`))))
}
