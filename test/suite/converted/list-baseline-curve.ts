// Converted from test/suite/corpus/list-baseline-curve.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, curve, doc, let_, m, pt } from '../../../src/index.ts'

export default () => {
  const [dyDecl, dy] = let_('dy', pt(15))
  return doc(
    m.lines(
      dyDecl,
      m.list(
        m.item([
          curve(
            { stroke: pt(5) },
            curve.move([pt(0), add(pt(30), dy)]),
            curve.line([pt(30), add(pt(30), dy)]),
            curve.line([pt(15), dy]),
            curve.close(),
          ),
        ]),
      ),
    ),
  )
}
