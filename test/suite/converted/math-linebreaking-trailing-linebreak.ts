// Converted from test/suite/corpus/math-linebreaking-trailing-linebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, box, define, doc, inline, line, m, pt, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const hrule = define('hrule')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => box(line({ length: p['x'] })))
  return doc(m.lines(hrule.decl, inline(hrule(pt(60)), unsafeRaw.math`e^(pi i)+1 = 0\\`)))
}
