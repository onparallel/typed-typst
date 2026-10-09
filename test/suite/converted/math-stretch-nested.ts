// Converted from test/suite/corpus/math-stretch-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, let_, m, math, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [baseDecl, base] = let_('base', math.stretch({ size: em(4) }, unsafeRaw.math`=`))
  const [baseDecl_2, base_2] = let_('base', unsafeRaw.math`stretch(=, size: #4em)`)
  return doc(
    inline(unsafeRaw.math.block`stretch(=, size: #2em) \\
  stretch(stretch(=, size: #4em), size: #50%)`),
    m.lines(baseDecl, inline(unsafeRaw.math.block`stretch(base, size: #50%)`)),
    m.lines(baseDecl_2, inline(unsafeRaw.math.block`stretch(base, size: #50%)`)),
  )
}
