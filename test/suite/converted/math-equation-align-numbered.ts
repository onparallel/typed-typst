// Converted from test/suite/corpus/math-equation-align-numbered.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  center,
  codeBlock,
  define,
  doc,
  end,
  inline,
  left,
  m,
  math,
  right,
  rtl,
  set,
  show,
  space,
  start,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const eq = define('eq')
    .pos('alignment', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock([show(math.equation, set(align, { alignment: p['alignment'] }))], unsafeRaw.math.block`a + b = c`),
    )
  return doc(
    eq.decl,
    set(math.equation, { numbering: '(1)' }),
    inline(eq(center), space, eq(left), space, eq(right)),
    m.lines(set(text, { dir: rtl }), inline(eq(start), space, eq(end))),
  )
}
