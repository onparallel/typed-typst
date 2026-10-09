// Converted from test/suite/corpus/math-equation-number-align-multiline-expand.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bottom,
  box,
  doc,
  horizon,
  inline,
  let_,
  m,
  math,
  set,
  silver,
  space,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [equationsDecl, equations] = let_(
    'equations',
    inline(
      space,
      box({ fill: silver }, unsafeRaw.math.block`- - -`),
      space,
      box(
        { fill: silver },
        unsafeRaw.math.block`- - - \\
    a = b`,
      ),
      space,
      box(
        { fill: silver },
        unsafeRaw.math.block`a = b \\
    - - -`,
      ),
      space,
    ),
  )
  return doc(
    equationsDecl,
    m.lines(set(math.equation, { numbering: '1', numberAlign: top }), inline(equations)),
    m.lines(set(math.equation, { numbering: '1', numberAlign: horizon }), inline(equations)),
    m.lines(set(math.equation, { numbering: '1', numberAlign: bottom }), inline(equations)),
  )
}
