// Converted from test/suite/corpus/issue-3973-math-equation-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, doc, end, inline, let_, m, math, set, show, space, start, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [equationsDecl, equations] = let_(
    'equations',
    inline(
      space,
      unsafeRaw.math.block`a + b &= c \\
      e &= f + g + h`,
      space,
      unsafeRaw.math.block`a &= b + c \\
  e + f + g &= h`,
      space,
    ),
  )
  return doc(
    m.lines(equationsDecl, inline(equations)),
    m.lines(show(math.equation, set(align, { alignment: start })), inline(equations)),
    m.lines(show(math.equation, set(align, { alignment: end })), inline(equations)),
  )
}
