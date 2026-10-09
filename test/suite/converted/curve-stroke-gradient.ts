// Converted from test/suite/corpus/curve-stroke-gradient.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, auto, blue, curve, doc, gradient, inline, let_, m, page, pt, red, set } from '../../../src/index.ts'

export default () => {
  const [downDecl, down] = let_('down', curve.line({ relative: true }, [pt(40), pt(40)]))
  const [upDecl, up] = let_('up', curve.line({ relative: true }, [pt(40), pt(-40)]))
  return doc(
    m.lines(set(page, { width: auto }), downDecl, upDecl),
    inline(curve({ stroke: add(pt(4), gradient.linear(red, blue)) }, down, up, down, up, down)),
  )
}
