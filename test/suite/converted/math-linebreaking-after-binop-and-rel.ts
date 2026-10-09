// Converted from test/suite/corpus/math-linebreaking-after-binop-and-rel.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, box, define, doc, inline, line, linebreak, m, pt, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const hrule = define('hrule')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => box(line({ length: p['x'] })))
  return doc(
    m.lines(
      hrule.decl,
      inline(
        hrule(pt(45)),
        unsafeRaw.math`e^(pi i)+1 = 0`,
        linebreak(),
        space,
        hrule(pt(55)),
        unsafeRaw.math`e^(pi i)+1 = 0`,
        linebreak(),
        space,
        hrule(pt(70)),
        unsafeRaw.math`e^(pi i)+1 = 0`,
      ),
    ),
  )
}
