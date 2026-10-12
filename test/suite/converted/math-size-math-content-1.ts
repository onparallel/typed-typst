// Converted from test/suite/corpus/math-size-math-content-1.typ by scripts/convert-suite.ts — do not edit.
import { context, doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [arrowDecl, arrow] = let_('arrow', unsafeRaw.math`stretch(->)^"much text"`)
  return doc(
    m.lines(
      arrowDecl,
      inline(unsafeRaw.math.block`arrow A^arrow A^A^arrow`),
      let_('width', unsafeRaw.code<any>`context measure(arrow).width`)[0],
      inline(unsafeRaw.math.block`width A^width A^A^width`),
    ),
  )
}
