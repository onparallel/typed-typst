// Converted from test/suite/corpus/math-linebreaking-lr.typ by scripts/convert-suite.ts — do not edit.
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
        hrule(pt(76)),
        unsafeRaw.math`a+b`,
        linebreak(),
        space,
        hrule(pt(74)),
        unsafeRaw.math`(a+b)`,
        linebreak(),
        space,
        hrule(pt(74)),
        unsafeRaw.math`paren.l a+b paren.r`,
      ),
    ),
  )
}
