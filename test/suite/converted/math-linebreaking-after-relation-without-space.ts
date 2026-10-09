// Converted from test/suite/corpus/math-linebreaking-after-relation-without-space.typ by scripts/convert-suite.ts — do not edit.
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
        hrule(pt(90)),
        unsafeRaw.math`<;`,
        linebreak(),
        space,
        hrule(pt(95)),
        unsafeRaw.math`<;`,
        linebreak(),
        space,
        hrule(pt(90)),
        unsafeRaw.math`<(`,
        linebreak(),
        space,
        hrule(pt(95)),
        unsafeRaw.math`<(`,
        space,
        hrule(pt(90)),
        unsafeRaw.math`<)`,
        linebreak(),
        space,
        hrule(pt(95)),
        unsafeRaw.math`<)`,
      ),
    ),
  )
}
