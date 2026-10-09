// Converted from test/suite/corpus/math-stretch-vertical-scripts.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [bigDecl, big] = let_('big', unsafeRaw.math`stretch(|, size: #4em)`)
  return doc(
    m.lines(
      bigDecl,
      inline(unsafeRaw.math.block`big_0^1 stretch(|, size: #1.5em)_0^1
  stretch(big, size: #1em)_0^1 |_0^1`),
    ),
  )
}
