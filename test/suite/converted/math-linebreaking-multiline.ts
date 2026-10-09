// Converted from test/suite/corpus/math-linebreaking-multiline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, box, define, doc, inline, line, linebreak, m, pt, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const hrule = define('hrule')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => box(line({ length: p['x'] })))
  return doc(m.lines(hrule.decl, inline(hrule(pt(80)), unsafeRaw.math`a + b \\ c + d`, linebreak())))
}
