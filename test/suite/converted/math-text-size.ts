// Converted from test/suite/corpus/math-text-size.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, doc, em, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [sizeDecl, size] = let_(
    'size',
    context((ctx) => inline(unsafeRaw.code<any>`text.size.to-absolute()`, space, em(1).toAbsolute())),
  )
  return doc(m.lines(sizeDecl, inline(unsafeRaw.math.block`size x^size x^x^size`)))
}
