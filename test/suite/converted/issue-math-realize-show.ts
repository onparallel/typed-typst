// Converted from test/suite/corpus/issue-math-realize-show.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, context, doc, inline, let_, m, math, pt, show, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [myDecl, my] = let_('my', unsafeRaw.math`pi`)
  const [f1Decl, f1] = let_('f1', box({ baseline: pt(10) }, inline`f`))
  const [f2Decl, f2] = let_(
    'f2',
    context((ctx) => f1),
  )
  return doc(
    m.lines(myDecl, f1Decl, f2Decl, show(math.vec, inline`nope`)),
    inline(
      unsafeRaw.math.block`pi a`,
      space,
      unsafeRaw.math.block`my a`,
      space,
      unsafeRaw.math.block`1 + sqrt(x/2) + sqrt(#hide($x/2$))`,
      space,
      unsafeRaw.math.block`a x #link("url", $+ b$)`,
      space,
      unsafeRaw.math.block`f f1 f2`,
      space,
      unsafeRaw.math.block`vec(1,2) * 2`,
    ),
  )
}
