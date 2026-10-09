// Converted from test/suite/corpus/math-size-resolve.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, doc, inline, let_, m, repr, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [lengthDecl, length_2] = let_(
    'length',
    context((ctx) => repr(unsafeRaw.code<any>`measure("--").width`)),
  )
  return doc(m.lines(lengthDecl, inline(unsafeRaw.math.block`a length a ^ length`)))
}
